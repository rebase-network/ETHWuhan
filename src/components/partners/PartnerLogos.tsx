import React from 'react';

// Simple geometric shapes for testing
export const partnerLogos = Array.from({ length: 8 }, (_, i) => {
  const Component = () => {
    switch (i % 4) {
      case 0:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="10" y="10" width="80" height="80" fill="currentColor" />
            <rect x="30" y="30" width="40" height="40" fill="white" />
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
            <polygon points="50,40 75,85 25,85" fill="white" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="currentColor" />
            <path d="M50,30 L70,50 L50,70 L30,50 Z" fill="white" />
          </svg>
        );
    }
  };
  Component.displayName = `PartnerLogo${i + 1}`;
  return Component;
});
