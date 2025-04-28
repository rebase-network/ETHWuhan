import React from 'react';

// Generate unique geometric logos for testing
function createLogoGenerator(type: 'media' | 'community') {
  return Array.from({ length: type === 'media' ? 10 : 30 }, (_, i) => {
    const Component = () => {
      const variant = i % 5;
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {variant === 0 && (
            <>
              <circle cx="50" cy="50" r="40" fill="currentColor" />
              <path d="M30,50 h40" stroke="white" strokeWidth="8" />
            </>
          )}
          {variant === 1 && (
            <>
              <rect x="10" y="10" width="80" height="80" fill="currentColor" />
              <circle cx="50" cy="50" r="20" fill="white" />
            </>
          )}
          {variant === 2 && (
            <>
              <polygon points="10,90 50,10 90,90" fill="currentColor" />
              <rect x="35" y="40" width="30" height="30" fill="white" />
            </>
          )}
          {variant === 3 && (
            <>
              <circle cx="50" cy="50" r="45" fill="currentColor" />
              <polygon points="35,35 65,50 35,65" fill="white" />
            </>
          )}
          {variant === 4 && (
            <>
              <path d="M20,20 h60 v60 h-60 Z" fill="currentColor" />
              <path d="M35,35 h30 v30 h-30 Z" fill="white" />
            </>
          )}
        </svg>
      );
    };
    Component.displayName = `${type === 'media' ? 'Media' : 'Community'}Logo${i + 1}`;
    return Component;
  });
}

export const mediaLogos = createLogoGenerator('media');
export const communityLogos = createLogoGenerator('community');
