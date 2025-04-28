import React from 'react';
import { DaySchedule } from './schedule/DaySchedule';
import { scheduleData } from './schedule/scheduleData';

export function Schedule() {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white" id="schedule">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">Three days of innovation, learning, and collaboration</p>
        </div>
        
        <div className="grid gap-8 sm:gap-12 px-2 sm:px-6">
          {scheduleData.map((day, index) => (
            <DaySchedule key={index} {...day} isLast={index === scheduleData.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}