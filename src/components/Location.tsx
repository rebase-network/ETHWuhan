import React from 'react';
import { AMapComponent } from './location/AMapComponent';

// Updated coordinates for the specified location
const LOCATION_COORDINATES: [number, number] = [114.328556, 30.43742];

export function Location() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Location
          </h2>
          <p className="text-gray-600">Join us in the heart of Wuhan</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Venue</h3>
                <p className="text-gray-600">Wuhan University Science & Technology Building</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  299 Bayi Road, Wuchang District
                  <br />
                  Wuhan, Hubei Province
                  <br />
                  China
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Transportation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Metro Line 2 - Engineering College Station</li>
                  <li>• Bus Routes: 402, 518, 564</li>
                  <li>• 30 minutes from Wuhan Railway Station</li>
                  <li>• 45 minutes from Wuhan Tianhe Airport</li>
                </ul>
              </div>
            </div>

            {/* AMap Integration */}
            <div className="relative bg-gradient-to-br from-purple-200 to-white p-6 rounded-xl shadow-sm">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl" />
              <div className="relative">
                <AMapComponent center={LOCATION_COORDINATES} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
