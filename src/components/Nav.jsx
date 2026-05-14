import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../config/i18n';
import { useLang } from '../hooks/useLang';
import styles from './Nav.module.css';

export default function Nav() {
  const { lang, switchLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  const NAV_ITEMS = [
    { path: '/',       label: t('nav_deconstruct') },
    { path: '/study',  label: t('nav_study') },
    { path: '/quiz',   label: t('nav_quiz') },
    { path: '/about',  label: t('nav_about') },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>W</span>
        <span className={styles.logoText}>WordRoots</span>
        <span className={styles.logoDot}>.vn</span>
      </div>

      <ul className={styles.links}>
        {NAV_ITEMS.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.langWrap} ref={menuRef}>
        <button className={styles.langBtn} onClick={() => setOpen(o => !o)}>
          <span className={styles.langFlag}>{currentLang.flag}</span>
          <span className={styles.langChevron}>{open ? '▲' : '▼'}</span>
        </button>
        {open && (
          <div className={styles.langMenu}>
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                className={`${styles.langOption} ${l.code === lang ? styles.langOptionActive : ''}`}
                onClick={() => { switchLang(l.code); setOpen(false); }}
              >
                <span className={styles.langOptionFlag}>{l.flag}</span>
                <span className={styles.langOptionLabel}>{l.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
