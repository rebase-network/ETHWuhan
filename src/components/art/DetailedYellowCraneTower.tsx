import React from 'react';

export function DetailedYellowCraneTower() {
  return (
    <svg
      viewBox="0 0 400 600"
      className="w-full h-full opacity-20"
      fill="none"
      stroke="currentColor"
    >
      {/* Yangtze River and Bridge */}
      <g className="opacity-60">
        <path
          d="M0 500 Q200 480 400 500 Q200 520 0 500"
          className="fill-current"
          opacity="0.3"
        />
        <path
          d="M50 490 Q200 450 350 490"
          strokeWidth="2"
          className="stroke-current"
        />
        {/* Bridge Pillars */}
        {[100, 200, 300].map((x) => (
          <line key={x} x1={x} y1="490" x2={x} y2="510" strokeWidth="3" />
        ))}
      </g>

      {/* Main Tower Structure */}
      <g className="opacity-80">
        {/* Base Platform */}
        <path
          d="M100 450 H300 L310 440 L90 440 Z"
          className="fill-current"
        />

        {/* Main Tower Body */}
        {[
          { y: 440, width: 180 },
          { y: 380, width: 160 },
          { y: 320, width: 140 },
          { y: 260, width: 120 },
          { y: 200, width: 100 }
        ].map(({ y, width }, i) => (
          <g key={i}>
            <path
              d={`M${200 - width/2} ${y} 
                  H${200 + width/2}
                  L${200 + width/2 + 20} ${y - 30}
                  L${200 - width/2 - 20} ${y - 30} Z`}
              className="fill-current"
              opacity="0.9"
            />
            {/* Decorative Eaves */}
            <path
              d={`M${200 - width/2 - 25} ${y - 15}
                  Q${200} ${y - 45} ${200 + width/2 + 25} ${y - 15}`}
              strokeWidth="2"
              fill="none"
            />
          </g>
        ))}

        {/* Top Ornament */}
        <path
          d="M190 180 L200 150 L210 180"
          strokeWidth="2"
          className="stroke-current"
        />
      </g>

      {/* Cherry Blossoms */}
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={`blossom-${i}`} transform={`translate(${50 + Math.random() * 300}, ${100 + Math.random() * 200})`}>
          <circle r="3" className="fill-current" opacity="0.4" />
          <circle r="1" className="fill-current" opacity="0.6" />
        </g>
      ))}

      {/* Chinese Characters */}
      <g className="opacity-70">
        <text x="170" y="280" className="fill-current" style={{ fontSize: '20px' }}>武汉</text>
        <text x="165" y="340" className="fill-current" style={{ fontSize: '20px' }}>黄鹤楼</text>
      </g>

      {/* East Lake Representation */}
      <path
        d="M320 420 Q350 410 380 430"
        className="stroke-current"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
      />
    </svg>
  );
}