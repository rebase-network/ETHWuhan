import React from 'react';

export function Background() {
  return (
    <div className="absolute inset-0">
      {/* SVG Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background.svg")' }}
      />

      {/* Dark gradient overlay with 15% opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-purple-900/15" />
    </div>
  );
}
