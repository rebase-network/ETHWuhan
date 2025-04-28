import React from 'react';
import { PartnerType } from './types';

export function PartnerCard({ LogoComponent, url }: PartnerType) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 bg-white rounded-lg hover:scale-105 transition-transform border border-gray-100 hover:shadow-md"
    >
      <div className="w-12 h-12 mx-auto text-gray-600 hover:text-purple-600">
        <LogoComponent />
      </div>
    </a>
  );
}