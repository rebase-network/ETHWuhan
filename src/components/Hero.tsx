import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { Navigation } from './layout/Navigation';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
