import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommunityCard } from './support/community/CommunityCard';
import { communityData } from './support/community/communityData';

export function CommunitySupport() {
  const { t } = useTranslation();

  return (
    <div className="py-6 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full px-2 sm:container sm:mx-auto sm:px-4">
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase">
            {t('community.title')}
          </h2>
          <p className="text-gray-600">{t('community.subtitle')}</p>
        </div>

        <div className="max-w-[280px] sm:max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 justify-items-center">
            {communityData.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
