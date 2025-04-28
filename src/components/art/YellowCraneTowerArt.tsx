import React from 'react';
import { ChineseCharacterBackground } from './ChineseCharacterBackground';

export function YellowCraneTowerArt() {
  return (
    <div className="relative w-full h-96">
      <ChineseCharacterBackground />
      
      <svg
        viewBox="0 0 200 300"
        className="relative z-10 w-full h-full"
        fill="none"
        stroke="currentColor"
      >
        {/* Main Tower Structure */}
        <path
          d="M80 50 L120 50 L120 100 L140 110 L140 160 L150 170 L150 220 L160 230 L160 280 L40 280 L40 230 L50 220 L50 170 L60 160 L60 110 L80 100 L80 50"
          className="stroke-2"
          fill="none"
        />
        
        {/* Decorative Roofs */}
        <path d="M70 100 L130 100" className="stroke-2" />
        <path d="M60 160 L140 160" className="stroke-2" />
        <path d="M50 220 L150 220" className="stroke-2" />
        
        {/* Traditional Upturned Eaves */}
        <path d="M70 98 Q100 90 130 98" className="stroke-2" />
        <path d="M60 158 Q100 150 140 158" className="stroke-2" />
        <path d="M50 218 Q100 210 150 218" className="stroke-2" />
        
        {/* Windows and Details */}
        <rect x="90" y="70" width="20" height="20" className="stroke-1" />
        <rect x="90" y="130" width="20" height="20" className="stroke-1" />
        <rect x="90" y="190" width="20" height="20" className="stroke-1" />
        
        {/* Ornamental Details */}
        <circle cx="100" cy="40" r="5" className="stroke-1" />
        <path d="M95 35 L105 35" className="stroke-1" />
        <path d="M95 45 L105 45" className="stroke-1" />
      </svg>
    </div>
  );
}