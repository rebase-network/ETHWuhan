import React from 'react';

export function WuhanBackground() {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/background.svg")' }}
    >
      {/* Dark gradient overlay for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/90 to-black" />
    </div>
  );
}