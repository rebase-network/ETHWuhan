import React from 'react';
import { useTranslation } from 'react-i18next';
import { MediaCard } from './support/media/MediaCard';
import { mediaData } from './support/media/mediaData';

export function MediaSupport() {
  const { t } = useTranslation();

  return (
    <div className="py-6 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-2 sm:container sm:mx-auto sm:px-4">
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('media.title')}
          </h2>
          <p className="text-gray-600">{t('media.subtitle')}</p>
        </div>

        <div className="max-w-[280px] sm:max-w-md mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 justify-items-center">
            {mediaData.map((media, index) => (
              <MediaCard key={index} {...media} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
