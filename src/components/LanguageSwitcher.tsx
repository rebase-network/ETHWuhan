import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
    >
      {i18n.language === 'en' ? '中文' : 'EN'}
    </button>
  );
}