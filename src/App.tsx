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

      <footer className="bg-gray-900 text-white">
        <SocialMedia />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;