import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from './components/Hero';
import { Hosts } from './components/Hosts';
import { Schedule } from './components/Schedule';
import { Location } from './components/Location';
import { Sponsors } from './components/Sponsors';
import { Partners } from './components/Partners';
import { MediaSupport } from './components/MediaSupport';
import { CommunitySupport } from './components/CommunitySupport';
import { FAQ } from './components/FAQ/FAQ';
import { SocialMedia } from './components/SocialMedia';
import { EthWuhanLogo } from './components/logo/EthWuhanLogo';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      <Hosts />
      <Schedule />
      <Location />
      <Sponsors />
      <Partners />
      <MediaSupport />
      <CommunitySupport />
      <FAQ />

      <footer className="bg-gray-900 text-white flex justify-between items-center p-[40px] flex-col md:flex-row space-y-6 md:space-y-0">
        <a href="/" className="flex-1 flex items-center gap-2">
          <EthWuhanLogo className="w-8 h-8" />
          <span className="text-lg sm:text-xl font-bold text-nowrap">{t('hero.title')}</span>
        </a>
        <div className="flex-1 text-center text-xs">
          <p>{t('footer.copyright')}</p>
        </div>
        <div className="flex-1">
          <SocialMedia />
        </div>
      </footer>
    </div>
  );
}

export default App;
