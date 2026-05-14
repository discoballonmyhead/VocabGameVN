import { useState, useRef } from 'react';
import { DECONSTRUCT_WORDS } from '../config/deconstructWords';
import { useLang } from '../hooks/useLang';
import styles from './DeconstructPage.module.css';

const DIFF_KEYS = ['all', 'easy', 'medium', 'hard'];
const TYPE_CLS = { prefix: 'prefix', root: 'root', suffix: 'suffix', connector: 'connector' };

// Build individual letter objects from the word string, preserving order.
// Each letter knows which segment it belongs to.
function initLetters(word) {
  const letters = [];
  word.segments.forEach((seg, segIdx) => {
    [...seg.letters].forEach((ch, pos) => {
      letters.push({
        id: `${segIdx}-${pos}-${ch}`,
        char: ch,
        segIdx,           // which segment this letter BELONGS to (the answer)
        placed: null,     // null = in word row | segIdx = placed in that drop zone
      });
    });
  });
  return letters;
}

export default function DeconstructPage() {
  const { lang, t } = useLang();
  const [difficulty, setDifficulty] = useState('all');
  const [wordIdx, setWordIdx] = useState(0);

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

  const resetWord = (w) => {
    setLetters(initLetters(w));
    setChecked(false); setResult(null); setRevealed(false);
  };

  const pickWord = (i) => { setWordIdx(i); resetWord(filtered[i]); };
  const nextWord = () => { const n = (wordIdx + 1) % filtered.length; pickWord(n); };

  // ── Drag ──────────────────────────────────────────────────
  const onDragStart = (e, id) => {
    dragRef.current = id;
    e.dataTransfer.effectAllowed = 'move';
  };

  const moveLetter = (id, dest) => {
    setLetters(prev => prev.map(l => l.id === id ? { ...l, placed: dest } : l));
    setChecked(false); setResult(null);
  };

  // Drop into a segment zone
  const onDropZone = (e, zoneSegIdx) => {
    e.preventDefault();
    if (dragRef.current) { moveLetter(dragRef.current, zoneSegIdx); dragRef.current = null; }
  };

  // Drop back to word row (unplace)
  const onDropWord = (e) => {
    e.preventDefault();
    if (dragRef.current) { moveLetter(dragRef.current, null); dragRef.current = null; }
  };

  // Click: cycle unplaced -> placed in correct zone -> unplaced
  const onClickLetter = (id) => {
    // const letter = letters.find(l => l.id === id);
    // if (!letter) return;
    // if (letter.placed !== null) {
    //   moveLetter(id, null);
    // } else {
    //   moveLetter(id, letter.segIdx); // shortcut: place into correct zone on click
    // }
  };

  // Click placed letter in zone to return it
  const onClickPlaced = (id) => moveLetter(id, null);

  // ── Check / reveal ────────────────────────────────────────
  const check = () => {
    let ok = true;
    word.segments.forEach((seg, si) => {
      const inZone = letters.filter(l => l.placed === si);
      const formed = inZone.map(l => l.char).join('');
      if (formed !== seg.letters) ok = false;
    });
    // Also fail if any letter is still unplaced
    if (letters.some(l => l.placed === null)) ok = false;
    setChecked(true);
    setResult(ok ? 'correct' : 'wrong');
  };

  const reveal = () => {
    setLetters(prev => prev.map(l => ({ ...l, placed: l.segIdx })));
    setRevealed(true); setChecked(true); setResult('correct');
  };

  // ── Derived state ─────────────────────────────────────────
  const getSegmentMeaning = (seg) => {
    if (!seg.meanings) return seg.meaning || '';
    return seg.meanings[lang] || seg.meanings.vi || seg.meanings.en || '';
  };

  const getWordTranslation = () => {
    if (lang === 'en') return '';
    return word.translations?.[lang] || word.translations?.vi || '';
  };

  const getHint = () => {
    if (!word.hint) return '';
    if (typeof word.hint === 'string') return word.hint;
    return word.hint[lang] || word.hint.vi || word.hint.en || '';
  };

  // Is a segment zone correct?
  const isZoneCorrect = (si) => {
    const inZone = letters.filter(l => l.placed === si);
    return inZone.map(l => l.char).join('') === word.segments[si].letters;
  };

  return (
    <div className={styles.page + ' page-enter'}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{t('dec_title')}</h1>
          <p className={styles.subtitle}>{t('dec_subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {/* Difficulty */}
        <div className={styles.filters}>
          {DIFF_KEYS.map(d => (
            <button key={d} className={`${styles.chip} ${difficulty === d ? styles.chipActive : ''}`}
              onClick={() => { setDifficulty(d); setWordIdx(0); resetWord((d === 'all' ? DECONSTRUCT_WORDS : DECONSTRUCT_WORDS.filter(w => w.difficulty === d))[0]); }}>
              {DIFF_LABELS[d]}
            </button>
          ))}
        </div>

        {/* Word picker */}
        <div className={styles.wordRow}>
          {filtered.map((w, i) => (
            <button key={w.id}
              className={`${styles.wordChip} ${i === wordIdx % filtered.length ? styles.wordChipActive : ''}`}
              onClick={() => pickWord(i)}>
              {w.word}
            </button>
          ))}
        </div>

        {/* Game area */}
        <div className={styles.game}>

          {/* Translation */}
          {getWordTranslation() && (
            <div className={styles.wordTranslation}>{getWordTranslation()}</div>
          )}

          {/* THE WORD — individual letter tiles in order, dimmed when placed */}
          <div className={styles.wordStrip}
            onDragOver={e => e.preventDefault()}
            onDrop={onDropWord}>
            <div className={styles.wordTileRow}>
              {letters.map((letter) => {
                const isPlaced = letter.placed !== null;
                const segType = word.segments[letter.segIdx]?.type;
                return (
                  <button
                    key={letter.id}
                    className={[
                      styles.letterTile,
                      isPlaced ? styles.letterDim : styles.letterActive,
                      isPlaced ? '' : styles['letterHover_' + segType],
                    ].join(' ')}
                    draggable={!isPlaced}
                    onDragStart={e => !isPlaced && onDragStart(e, letter.id)}
                    onClick={() => onClickLetter(letter.id)}
                    title={isPlaced ? t('dec_drop_here') : letter.char}
                  >
                    {letter.char}
                  </button>
                );
              })}
            </div>
            <div className={styles.wordStripLabel}>{t('dec_pool_label')}</div>
          </div>

          {/* Hint */}
          <div className={styles.hint}>{t('dec_hint_label')}: {getHint()}</div>

          {/* Drop zones */}
          <div className={styles.zones}>
            {word.segments.map((seg, si) => {
              const info = TYPE_LABELS[seg.type];
              const inZone = letters.filter(l => l.placed === si);
              // Sort by original position in word
              inZone.sort((a, b) => {
                const ai = letters.indexOf(a);
                const bi = letters.indexOf(b);
                return ai - bi;
              });
              const correct = checked && isZoneCorrect(si);
              const wrong = checked && !isZoneCorrect(si);

              return (
                <div key={si}
                  className={`${styles.zone} ${styles['zone_' + seg.type]} ${correct ? styles.zoneOk : ''} ${wrong ? styles.zoneErr : ''}`}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => onDropZone(e, si)}>

                  <div className={styles.zoneHead}>
                    <span className={`${styles.typeTag} ${styles['tag_' + TYPE_CLS[seg.type]]}`}>{info.en}</span>
                    <span className={styles.zoneNative}>{info.native}</span>
                  </div>

                  <div className={styles.zoneLetters}>
                    {inZone.map(letter => (
                      <button
                        key={letter.id}
                        className={`${styles.letterTile} ${styles['letterPlaced_' + seg.type]}`}
                        draggable
                        onDragStart={e => onDragStart(e, letter.id)}
                        onClick={() => onClickPlaced(letter.id)}
                        title="Click to return"
                      >
                        {letter.char}
                      </button>
                    ))}
                    {inZone.length === 0 && (
                      <span className={styles.zonePh}>{t('dec_drop_here')}</span>
                    )}
                  </div>

                  {/* Meaning revealed after correct or reveal */}
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

          {/* Result banner */}
          {result && (
            <div className={`${styles.resultBanner} ${result === 'correct' ? styles.resultOk : styles.resultErr}`}>
              {result === 'correct' ? t('dec_result_correct') : t('dec_result_wrong')}
            </div>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={check}>{t('dec_btn_check')}</button>
            <button className={styles.btnGhost} onClick={reveal}>{t('dec_btn_reveal')}</button>
            <button className={styles.btnGhost} onClick={() => resetWord(word)}>{t('dec_btn_reset')}</button>
            <button className={styles.btnGhost} onClick={nextWord}>{t('dec_btn_next')}</button>
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          {Object.entries(TYPE_LABELS).map(([key, val]) => (
            <div key={key} className={styles.legendItem}>
              <span className={`${styles.typeTag} ${styles['tag_' + TYPE_CLS[key]]}`}>{val.en}</span>
              <span className={styles.legendDef}>{val.native}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
