import { useState } from 'react';
import { ROOT_WORDS } from '../config/rootWords';
import { useLang } from '../hooks/useLang';
import styles from './StudyPage.module.css';

export default function StudyPage() {
  const { lang, t } = useLang();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const getTranslation = (root) => {
    if (lang === 'en') return root.meaning;
    return root.translations?.[lang] || root.translations?.vi || root.meaning;
  };

  const getExTrans = (ex) => {
    if (lang === 'en') return '';
    return ex[lang] || ex.vi || '';
  };

  const filtered = ROOT_WORDS.filter(r => {
    const q = search.toLowerCase();
    return r.root.toLowerCase().includes(q)
      || r.meaning.toLowerCase().includes(q)
      || (r.translations?.vi || '').toLowerCase().includes(q)
      || getTranslation(r).toLowerCase().includes(q);
  });

  const detail = selected ? ROOT_WORDS.find(r => r.id === selected) : null;

  return (
    <div className={styles.page + ' page-enter'}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{t('study_title')}</h1>
          <p className={styles.subtitle}>
            {ROOT_WORDS.length} {t('study_subtitle')}
          </p>
          <div className={styles.searchWrap}>
            <span className={styles.searchIco}>&#9906;</span>
            <input
              className={styles.searchInput}
              placeholder={t('study_search_placeholder')}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className={styles.searchClear} onClick={() => setSearch('')}>x</button>}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={detail ? styles.layoutSplit : styles.layout}>
          <div className={styles.grid}>
            {filtered.length === 0 && <div className={styles.empty}>{t('study_no_results')}</div>}
            {filtered.map(root => (
              <button key={root.id}
                className={`${styles.card} ${selected === root.id ? styles.cardActive : ''}`}
                style={{ '--c': root.color }}
                onClick={() => setSelected(selected === root.id ? null : root.id)}>
                <div className={styles.cardRoot}>{root.root}</div>
                <div className={styles.cardMeaning}>{root.meaning}</div>
                <div className={styles.cardTrans}>{getTranslation(root)}</div>
                <div className={styles.cardCount}>{root.examples.length} {t('study_examples')}</div>
              </button>
            ))}
          </div>

          {detail && (
            <div className={styles.detail} key={detail.id}>
              <div className={styles.detailTop} style={{ '--c': detail.color }}>
                <div className={styles.detailRoot}>{detail.root}</div>
                <div className={styles.detailOrigin}>{t('study_origin')}: {detail.origin}</div>
              </div>

              <div className={styles.detailMeanings}>
                <div className={styles.mRow}>
                  <span className={styles.mLabel}>{t('study_meaning_en')}</span>
                  <span className={styles.mVal}>{detail.meaning}</span>
                </div>
                {lang !== 'en' && (
                  <div className={styles.mRow}>
                    <span className={styles.mLabel}>{t('study_meaning_native')}</span>
                    <span className={styles.mVal}>{getTranslation(detail)}</span>
                  </div>
                )}
              </div>

              <div className={styles.exLabel}>{t('study_examples')}</div>
              <div className={styles.examples}>
                {detail.examples.map((ex, i) => (
                  <div key={i} className={styles.exRow}>
                    <span className={styles.exWord}>{ex.word}</span>
                    <span className={styles.exTrans}>{getExTrans(ex)}</span>
                  </div>
                ))}
              </div>

              <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                {t('study_close')}
              </button>
            </div>
          )}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>{ROOT_WORDS.length}</span>
            <span className={styles.statLabel}>{t('study_stats_roots')}</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>{ROOT_WORDS.reduce((a,r) => a + r.examples.length, 0)}</span>
            <span className={styles.statLabel}>{t('study_stats_examples')}</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>7</span>
            <span className={styles.statLabel}>{t('study_stats_origins')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
