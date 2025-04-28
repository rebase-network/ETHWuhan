import React from 'react';
import { useTranslation } from 'react-i18next';

export function EventDateTime() {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
        <span className="text-xl text-white font-medium">{t('hero.date')}</span>
      </div>
    </div>
  );
}
