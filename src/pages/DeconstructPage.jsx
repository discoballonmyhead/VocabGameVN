import { useState, useRef } from 'react';
import { DECONSTRUCT_WORDS } from '../config/deconstructWords';
import { useLang } from '../hooks/useLang';
import styles from './DeconstructPage.module.css';

const DIFF_KEYS = ['all', 'easy', 'medium', 'hard'];
const TYPE_CLS = { prefix: 'prefix', root: 'root', suffix: 'suffix', connector: 'connector' };

function initLetters(word) {
  const letters = [];
  word.segments.forEach((seg, segIdx) => {
    [...seg.letters].forEach((ch, pos) => {
      letters.push({ id: `${segIdx}-${pos}-${ch}`, char: ch, segIdx, placed: null });
    });
  });
  return letters;
}

export default function DeconstructPage() {
  const { lang, t } = useLang();
  const [difficulty, setDifficulty] = useState('all');
  const [wordIdx, setWordIdx] = useState(0);
  const [showBrowser, setShowBrowser] = useState(false);
  const [browserDiff, setBrowserDiff] = useState('all');

  const filtered = difficulty === 'all'
    ? DECONSTRUCT_WORDS
    : DECONSTRUCT_WORDS.filter(w => w.difficulty === difficulty);
  const word = filtered[wordIdx % filtered.length];

  const [letters, setLetters] = useState(() => initLetters(word));
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const dragRef = useRef(null);

  const TYPE_LABELS = {
    prefix: { en: 'Prefix', native: t('seg_prefix') },
    root: { en: 'Root', native: t('seg_root') },
    suffix: { en: 'Suffix', native: t('seg_suffix') },
    connector: { en: 'Connector', native: t('seg_connector') },
  };

  const DIFF_LABELS = {
    all: t('dec_difficulty_all'), easy: t('dec_difficulty_easy'),
    medium: t('dec_difficulty_medium'), hard: t('dec_difficulty_hard'),
  };

  const DIFF_COLORS = { easy: '#4caf50', medium: '#FCB75C', hard: '#FC5C7D' };

  const resetWord = (w) => {
    setLetters(initLetters(w));
    setChecked(false); setResult(null); setRevealed(false);
  };

  // Pick by index into DECONSTRUCT_WORDS (global), then close modal
  const pickWord = (globalIdx) => {
    const w = DECONSTRUCT_WORDS[globalIdx];
    const fi = filtered.indexOf(w);
    if (fi !== -1) {
      setWordIdx(fi);
    } else {
      setDifficulty('all');
      setWordIdx(DECONSTRUCT_WORDS.indexOf(w));
    }
    resetWord(w);
    setShowBrowser(false);
  };

  const nextWord = () => { const n = (wordIdx + 1) % filtered.length; setWordIdx(n); resetWord(filtered[n]); };

  const onDragStart = (e, id) => { dragRef.current = id; e.dataTransfer.effectAllowed = 'move'; };
  const moveLetter = (id, dest) => { setLetters(prev => prev.map(l => l.id === id ? { ...l, placed: dest } : l)); setChecked(false); setResult(null); };
  const onDropZone = (e, si) => { e.preventDefault(); if (dragRef.current) { moveLetter(dragRef.current, si); dragRef.current = null; } };
  const onDropWord = (e) => { e.preventDefault(); if (dragRef.current) { moveLetter(dragRef.current, null); dragRef.current = null; } };
  const onClickPlaced = (id) => moveLetter(id, null);

  const check = () => {
    let ok = true;
    word.segments.forEach((seg, si) => {
      if (letters.filter(l => l.placed === si).map(l => l.char).join('') !== seg.letters) ok = false;
    });
    if (letters.some(l => l.placed === null)) ok = false;
    setChecked(true); setResult(ok ? 'correct' : 'wrong');
  };

  const reveal = () => { setLetters(prev => prev.map(l => ({ ...l, placed: l.segIdx }))); setRevealed(true); setChecked(true); setResult('correct'); };

  const getSegmentMeaning = (seg) => seg.meanings ? (seg.meanings[lang] || seg.meanings.vi || seg.meanings.en || '') : (seg.meaning || '');
  const getWordTranslation = () => lang === 'en' ? '' : (word.translations?.[lang] || word.translations?.vi || '');
  const getHint = () => { if (!word.hint) return ''; if (typeof word.hint === 'string') return word.hint; return word.hint[lang] || word.hint.vi || word.hint.en || ''; };
  const isZoneCorrect = (si) => letters.filter(l => l.placed === si).map(l => l.char).join('') === word.segments[si].letters;

  const browserFiltered = browserDiff === 'all' ? DECONSTRUCT_WORDS : DECONSTRUCT_WORDS.filter(w => w.difficulty === browserDiff);

  return (
    <div className={styles.page + ' page-enter'}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{t('dec_title')}</h1>
          <p className={styles.subtitle}>{t('dec_subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.filters}>
            {DIFF_KEYS.map(d => (
              <button key={d} className={`${styles.chip} ${difficulty === d ? styles.chipActive : ''}`}
                onClick={() => { const nf = d === 'all' ? DECONSTRUCT_WORDS : DECONSTRUCT_WORDS.filter(w => w.difficulty === d); setDifficulty(d); setWordIdx(0); resetWord(nf[0]); }}>
                {DIFF_LABELS[d]}
              </button>
            ))}
          </div>
          <button className={styles.browseBtn} onClick={() => setShowBrowser(true)}>
            All words ({DECONSTRUCT_WORDS.length})
          </button>
        </div>

        <div className={styles.game}>
          {getWordTranslation() && <div className={styles.wordTranslation}>{getWordTranslation()}</div>}

          <div className={styles.wordStrip} onDragOver={e => e.preventDefault()} onDrop={onDropWord}>
            <div className={styles.wordTileRow}>
              {letters.map((letter) => {
                const isPlaced = letter.placed !== null;
                const segType = word.segments[letter.segIdx]?.type;
                return (
                  <button key={letter.id}
                    className={[styles.letterTile, isPlaced ? styles.letterDim : styles.letterActive, isPlaced ? '' : styles['letterHover_' + segType]].join(' ')}
                    draggable={!isPlaced}
                    onDragStart={e => !isPlaced && onDragStart(e, letter.id)}>
                    {letter.char}
                  </button>
                );
              })}
            </div>
            <div className={styles.wordStripLabel}>{t('dec_pool_label')}</div>
          </div>

          <div className={styles.hint}>{t('dec_hint_label')}: {getHint()}</div>

          <div className={styles.zones}>
            {word.segments.map((seg, si) => {
              const info = TYPE_LABELS[seg.type];
              const inZone = [...letters.filter(l => l.placed === si)].sort((a, b) => letters.indexOf(a) - letters.indexOf(b));
              const correct = checked && isZoneCorrect(si);
              const wrong = checked && !isZoneCorrect(si);
              return (
                <div key={si}
                  className={`${styles.zone} ${styles['zone_' + seg.type]} ${correct ? styles.zoneOk : ''} ${wrong ? styles.zoneErr : ''}`}
                  onDragOver={e => e.preventDefault()} onDrop={e => onDropZone(e, si)}>
                  <div className={styles.zoneHead}>
                    <span className={`${styles.typeTag} ${styles['tag_' + TYPE_CLS[seg.type]]}`}>{info.en}</span>
                    <span className={styles.zoneNative}>{info.native}</span>
                  </div>
                  <div className={styles.zoneLetters}>
                    {inZone.map(letter => (
                      <button key={letter.id}
                        className={`${styles.letterTile} ${styles['letterPlaced_' + seg.type]}`}
                        draggable onDragStart={e => onDragStart(e, letter.id)}
                        onClick={() => onClickPlaced(letter.id)}>
                        {letter.char}
                      </button>
                    ))}
                    {inZone.length === 0 && <span className={styles.zonePh}>{t('dec_drop_here')}</span>}
                  </div>
                  {(revealed || correct) && (
                    <div className={styles.zoneMeaning}>
                      <span className={styles.zoneMeaningWord}>{seg.letters}</span>
                      <span className={styles.zoneMeaningEq}>=</span>
                      <span className={styles.zoneMeaningText}>{getSegmentMeaning(seg)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {result && (
            <div className={`${styles.resultBanner} ${result === 'correct' ? styles.resultOk : styles.resultErr}`}>
              {result === 'correct' ? t('dec_result_correct') : t('dec_result_wrong')}
            </div>
          )}

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={check}>{t('dec_btn_check')}</button>
            <button className={styles.btnGhost} onClick={reveal}>{t('dec_btn_reveal')}</button>
            <button className={styles.btnGhost} onClick={() => resetWord(word)}>{t('dec_btn_reset')}</button>
            <button className={styles.btnGhost} onClick={nextWord}>{t('dec_btn_next')}</button>
          </div>
        </div>

        <div className={styles.legend}>
          {Object.entries(TYPE_LABELS).map(([key, val]) => (
            <div key={key} className={styles.legendItem}>
              <span className={`${styles.typeTag} ${styles['tag_' + TYPE_CLS[key]]}`}>{val.en}</span>
              <span className={styles.legendDef}>{val.native}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Word Browser Modal */}
      {showBrowser && (
        <div className={styles.overlay} onClick={() => setShowBrowser(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h2 className={styles.modalTitle}>All Words</h2>
              <button className={styles.modalClose} onClick={() => setShowBrowser(false)}>&#x2715;</button>
            </div>
            <div className={styles.modalFilters}>
              {DIFF_KEYS.map(d => (
                <button key={d} className={`${styles.chip} ${browserDiff === d ? styles.chipActive : ''}`} onClick={() => setBrowserDiff(d)}>
                  {DIFF_LABELS[d]}
                </button>
              ))}
            </div>
            <div className={styles.wordGrid}>
              {browserFiltered.map((w) => (
                <button key={w.id}
                  className={`${styles.wordCard} ${w.id === word.id ? styles.wordCardActive : ''}`}
                  onClick={() => pickWord(DECONSTRUCT_WORDS.indexOf(w))}>
                  <span className={styles.wordCardWord}>{w.word}</span>
                  <span className={styles.wordCardTrans}>
                    {lang === 'en' ? '' : (w.translations?.[lang] || w.translations?.vi || '')}
                  </span>
                  <span className={styles.wordCardDiff} style={{ color: DIFF_COLORS[w.difficulty] }}>
                    {DIFF_LABELS[w.difficulty]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}