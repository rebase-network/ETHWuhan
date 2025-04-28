import React from 'react';
import { SponsorType } from './types';

export function SponsorCard({ logo, url, name }: SponsorType) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:scale-105 transition-transform hover:shadow-md"
    >
      <div className="w-16 h-16 sm:w-32 sm:h-32 mx-auto">
        {' '}
        {/* Increased from w-12/h-12 to w-16/h-16 and sm:w-24/h-24 to sm:w-32/h-32 */}
        <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
      </div>
    </a>
  );
}
