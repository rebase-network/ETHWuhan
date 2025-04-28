import React from 'react';

export function ChineseCharacterBackground() {
  // Characters related to Wuhan and Yellow Crane Tower
  const characters = '武汉黄鹤楼江城东湖樱花';
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-xl text-white transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {characters[Math.floor(Math.random() * characters.length)]}
        </div>
      ))}
    </div>
  );
}