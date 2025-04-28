import React from 'react';
import { useTranslation } from 'react-i18next';
import { EventDateTime } from './EventDateTime';

export function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {t('hero.title')}
          </h1>
          <EventDateTime />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-4">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 sm:px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto text-base sm:text-lg">
              {t('hero.register')}
            </button>
            <button className="border border-gray-600 px-6 sm:px-8 py-3 rounded-full text-white font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto text-base sm:text-lg">
              {t('hero.getInvolved')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
