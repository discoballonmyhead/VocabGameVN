import { createContext, useContext, useState } from 'react';
import { DEFAULT_LANG } from '../config/i18n';
import { t as translate } from '../config/i18n';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('wr-lang') || DEFAULT_LANG;
  });

  const switchLang = (code) => {
    setLang(code);
    localStorage.setItem('wr-lang', code);
  };

  const t = (key) => translate(key, lang);

  // Get the right translation from a data entry (root word example, quiz card, etc.)
  // Falls back through: lang -> vi -> en
  const tx = (obj, field) => {
    if (!obj) return '';
    // Direct field like obj.vi / obj.th / obj.zh
    if (lang !== 'en' && obj[lang]) return obj[lang];
    if (lang === 'en') return obj['en'] || obj['vi'] || '';
    return obj['vi'] || obj['en'] || '';
  };

  return (
    <LangContext.Provider value={{ lang, switchLang, t, tx }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
