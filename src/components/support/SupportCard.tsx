import React from 'react';
import { SupportEntityType } from './types';

export function SupportCard({ logo, name, url }: SupportEntityType) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 bg-white rounded-lg hover:scale-105 transition-transform border border-gray-100 hover:shadow-md"
    >
      <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-1">
        <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
      </div>
      <p className="text-xs text-center text-gray-600 truncate">{name}</p>
    </a>
  );
}
