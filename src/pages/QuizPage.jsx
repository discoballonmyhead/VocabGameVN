import { useState, useMemo } from 'react';
import { QUIZ_CARDS } from '../config/quizCards';
import { useLang } from '../hooks/useLang';
import styles from './QuizPage.module.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build 4 answer choices: 1 correct + 3 wrong from other cards
function buildChoices(card, allCards, lang) {
  const correct = card.translations[lang] || card.translations.vi || card.meaning;
  const wrongs = shuffle(allCards.filter(c => c.id !== card.id))
    .slice(0, 3)
    .map(c => c.translations[lang] || c.translations.vi || c.meaning);
  return shuffle([correct, ...wrongs]).map((text, i) => ({ id: i, text, isCorrect: text === correct }));
}

function useQuiz(filter, lang) {
  const cards = useMemo(() => {
    const base = filter === 'all' ? QUIZ_CARDS : QUIZ_CARDS.filter(c => c.type === filter);
    return shuffle(base);
  }, [filter, lang]); // rebuild on filter or language change
  return cards;
}

export default function QuizPage() {
  const { lang, t, tx } = useLang();
  const [filter, setFilter] = useState('all');
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);     // chosen choice id
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [history, setHistory] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const cards = useQuiz(filter, lang);
  const card = cards[idx % cards.length];
  const total = cards.length;
  const choices = useMemo(
    () => card ? buildChoices(card, cards, lang) : [],
    [card?.id, lang]
  );

  const restart = (newFilter) => {
    const f = newFilter ?? filter;
    setFilter(f);
    setIdx(0); setSelected(null); setConfirmed(false);
    setScore({ correct: 0, wrong: 0 }); setHistory([]); setShowSummary(false);
  };

  const confirm = () => {
    if (selected === null || confirmed) return;
    const choice = choices.find(c => c.id === selected);
    const ok = choice?.isCorrect;
    setConfirmed(true);
    setScore(s => ({ ...s, [ok ? 'correct' : 'wrong']: s[ok ? 'correct' : 'wrong'] + 1 }));
    setHistory(h => [...h, { card, ok }]);
  };

  const next = () => {
    if (idx + 1 >= total) { setShowSummary(true); return; }
    setIdx(i => i + 1);
    setSelected(null);
    setConfirmed(false);
  };

  const progress = total > 0 ? (idx / total) * 100 : 0;

  if (showSummary) {
    const pct = Math.round((score.correct / total) * 100);
    return (
      <div className={styles.page + ' page-enter'}>
        <div className="container">
          <div className={styles.summary}>
            <div className={styles.summaryGrade}>{pct >= 80 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D'}</div>
            <h2 className={styles.summaryTitle}>{t('quiz_summary_title')}</h2>
            <p className={styles.summaryScore}>{score.correct} / {total} {t('quiz_summary_score')} — {pct}%</p>
            <div className={styles.summaryBar}>
              <div className={styles.summaryFill} style={{ width: pct + '%' }} />
            </div>
            <div className={styles.histList}>
              {history.map(({ card: c, ok }, i) => (
                <div key={i} className={`${styles.histRow} ${ok ? styles.histOk : styles.histErr}`}>
                  <span className={styles.histAffix}>{c.affix}</span>
                  <span className={styles.histMeaning}>{c.translations[lang] || c.translations.vi || c.meaning}</span>
                  <span className={styles.histDot} style={{ background: ok ? '#4caf50' : '#ef5350' }} />
                </div>
              ))}
            </div>
            <div className={styles.summaryActions}>
              <button className={styles.btnPrimary} onClick={() => restart()}>{t('quiz_restart')}</button>
              <button className={styles.btnGhost} onClick={() => restart('prefix')}>{t('quiz_only_prefix')}</button>
              <button className={styles.btnGhost} onClick={() => restart('suffix')}>{t('quiz_only_suffix')}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!card) return null;

  const correctTranslation = card.translations[lang] || card.translations.vi || card.meaning;

  return (
    <div className={styles.page + ' page-enter'}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{t('quiz_title')}</h1>
          <p className={styles.subtitle}>{t('quiz_subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {/* Top bar */}
        <div className={styles.topBar}>
          <div className={styles.filters}>
            {['all','prefix','suffix'].map(f => (
              <button key={f}
                className={`${styles.chip} ${filter === f ? styles.chipActive : ''}`}
                onClick={() => restart(f)}>
                {t('quiz_filter_'+f)}
              </button>
            ))}
          </div>
          <div className={styles.scoreRow}>
            <span className={styles.scoreCorrect}>{score.correct}</span>
            <span className={styles.scoreDivider}>/</span>
            <span className={styles.scoreWrong}>{score.wrong}</span>
            <span className={styles.scoreOf}>{idx + 1} / {total}</span>
          </div>
        </div>

        {/* Progress */}
        <div className={styles.progressWrap}>
          <div className={styles.progressFill} style={{ width: progress + '%' }} />
        </div>

        {/* Question */}
        <div className={styles.questionCard} style={{ '--qc': card.color }}>
          <div className={styles.qcInner}>
            <div className={styles.qTag}>
              <span className={`${styles.typeTag} ${styles['tag_' + card.type]}`}>{card.type}</span>
            </div>
            <div className={styles.qLabel}>{t('quiz_question_label')}</div>
            <div className={styles.qAffix}>{card.affix}</div>
            <div className={styles.qSuffix}>{t('quiz_question_suffix')}</div>
          </div>
        </div>

        {/* Choices */}
        <div className={styles.choices}>
          {choices.map(choice => {
            let cls = styles.choice;
            if (confirmed) {
              if (choice.isCorrect) cls += ' ' + styles.choiceCorrect;
              else if (choice.id === selected) cls += ' ' + styles.choiceWrong;
              else cls += ' ' + styles.choiceDim;
            } else if (choice.id === selected) {
              cls += ' ' + styles.choiceSelected;
            }
            return (
              <button key={choice.id} className={cls}
                onClick={() => !confirmed && setSelected(choice.id)}
                disabled={confirmed}>
                <span className={styles.choiceLetter}>{String.fromCharCode(65 + choice.id)}</span>
                <span className={styles.choiceText}>{choice.text}</span>
                {confirmed && choice.isCorrect && <span className={styles.choiceTick}>+</span>}
                {confirmed && !choice.isCorrect && choice.id === selected && <span className={styles.choiceCross}>x</span>}
              </button>
            );
          })}
        </div>

        {/* Feedback / confirm */}
        {!confirmed ? (
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={confirm} disabled={selected === null}>
              {t('dec_btn_check')}
            </button>
          </div>
        ) : (
          <div className={styles.feedbackArea}>
            <div className={`${styles.feedbackBanner} ${choices.find(c => c.id === selected)?.isCorrect ? styles.feedOk : styles.feedErr}`}>
              {choices.find(c => c.id === selected)?.isCorrect ? t('quiz_correct') : t('quiz_wrong')}
              {!choices.find(c => c.id === selected)?.isCorrect && (
                <span className={styles.correctWas}> {t('quiz_correct_was')} {correctTranslation}</span>
              )}
            </div>

            {/* Examples */}
            <div className={styles.feedExamples}>
              <div className={styles.feedExLabel}>{t('quiz_examples_label')}:</div>
              <div className={styles.feedExRow}>
                {card.examples.map((ex, i) => (
                  <div key={i} className={styles.feedEx}>
                    <span className={styles.feedExWord}>{ex.word}</span>
                    <span className={styles.feedExTrans}>{ex[lang] || ex.vi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mnemonic */}
            {card.mnemonic && (
              <div className={styles.mnemonic}>
                <span className={styles.mnemonicLabel}>{t('quiz_mnemonic_label')}:</span>
                {card.mnemonic[lang] || card.mnemonic.vi}
              </div>
            )}

            <button className={styles.btnPrimary} onClick={next}>{t('quiz_next')}</button>
          </div>
        )}
      </div>
    </div>
  );
}
