import React from 'react';

const stats = [
  { value: '50+', label: 'Speakers' },
  { value: '¥300K', label: 'Prize Pool' },
  { value: '3', label: 'Days' },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-16">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{value}</div>
          <div className="text-gray-400">{label}</div>
        </div>
      ))}
    </div>
  );
}
