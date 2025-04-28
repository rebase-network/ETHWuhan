import React from 'react';
import { ScheduleEvent } from './ScheduleEvent';
import { EventType } from './types';

interface DayScheduleProps {
  day: string;
  date: string;
  events: EventType[];
  isLast?: boolean;
}

export function DaySchedule({ day, date, events, isLast }: DayScheduleProps) {
  return (
    <div className={`relative ${!isLast && 'pb-12'}`}>
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-purple-200 to-transparent" />
      )}
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
            {day}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{day}</h3>
            <p className="text-purple-600 font-medium">{date}</p>
          </div>
        </div>
        
        <div className="space-y-4 pl-20">
          {events.map((event, index) => (
            <ScheduleEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}