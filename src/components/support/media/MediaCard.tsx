import React from 'react';
import { SupportEntityType } from '../types';

export function MediaCard({ logo, name, url }: SupportEntityType) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 sm:p-4 bg-white rounded-lg hover:scale-105 transition-transform border border-gray-100 hover:shadow-md"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2">
        <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
      </div>
      <p className="text-xs sm:text-sm text-center text-gray-600 truncate">{name}</p>
    </a>
  );
}
