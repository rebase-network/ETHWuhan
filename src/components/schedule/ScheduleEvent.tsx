import React from 'react';
import { EventType } from './types';

export function ScheduleEvent({ time, title, description }: EventType) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start gap-6">
        <span className="text-purple-600 font-semibold">{time}</span>
        <div>
          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h4>
          {description && (
            <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}