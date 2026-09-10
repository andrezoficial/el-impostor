import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'el-impostor-lang';

const detectDefaultLang = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch (_) {
    // localStorage no disponible (modo privado, etc.) — seguimos sin persistencia
  }
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  return browserLang.startsWith('en') ? 'en' : 'es';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectDefaultLang);

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, newLang);
    } catch (_) {
      // Ignorar si no hay localStorage disponible
    }
  }, []);

  // t('seccion.clave') → string, o t('seccion.clave', arg1, arg2) si el valor es una función
  const t = useCallback((key, ...args) => {
    const parts = key.split('.');
    let value = translations[lang];
    for (const p of parts) {
      value = value?.[p];
    }
    if (typeof value === 'function') return value(...args);
    return value ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return ctx;
};
