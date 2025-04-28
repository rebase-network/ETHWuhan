import React from 'react';

interface EthWuhanLogoProps {
  className?: string;
}

export function EthWuhanLogo({ className = "w-12 h-12" }: EthWuhanLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ethereum Diamond Merged with Tower */}
      <g className="opacity-90">
        {/* Base Diamond */}
        <path
          d="M50 5L15 50L50 65L85 50L50 5Z"
          fill="currentColor"
          className="opacity-80"
        />
        <path
          d="M50 75L15 50L50 65L85 50L50 75Z"
          fill="currentColor"
          className="opacity-60"
        />
        
        {/* Tower Overlay */}
        <path
          d="M40 35L50 25L60 35V45L65 50V60L70 65V70H30V65L35 60V50L40 45V35Z"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-80"
        />
        
        {/* Traditional Roof Details */}
        <path
          d="M35 50Q50 45 65 50"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-90"
        />
        <path
          d="M30 65Q50 60 70 65"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-90"
        />
      </g>

      {/* Stylized Waves - Yangtze River */}
      <g className="opacity-40">
        <path
          d="M10 80Q25 75 40 80Q55 85 70 80Q85 75 90 80"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0 85Q15 80 30 85Q45 90 60 85Q75 80 100 85"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>

      {/* Cherry Blossoms */}
      <g className="opacity-50">
        {[
          [25, 30],
          [75, 30],
          [20, 40],
          [80, 40]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="1.5" fill="currentColor" />
            <path
              d={`M${cx-2},${cy} Q${cx},${cy-2} ${cx+2},${cy} Q${cx},${cy+2} ${cx-2},${cy}`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}