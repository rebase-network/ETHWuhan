import React from 'react';

export function AsciiYellowCraneTower() {
  const asciiArt = `
    江      城      楼      台
           ^
          /|\\
         / | \\
        /  |  \\
       /---|---\\
      /    |    \\
     黄----+----鹤
    /      |      \\
   /       |       \\
  /--------|--------\\
  |    [======]    |
  |     武汉      |
  |     ||||      |
  |     ||||      |
  |   [======]    |
  |     ||||      |
  |     ||||      |
  |   [======]    |
  |________________|
  \\||||||||||||||//
   \\||||长江|||//
    \\||||||||||//
  `.trim();

  return (
    <pre className="font-mono text-xs sm:text-sm md:text-base whitespace-pre text-white opacity-20 select-none">
      {asciiArt}
    </pre>
  );
}