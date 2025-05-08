import React, { useState } from 'react';
import { Compass, Mountain, Ruler, ThermometerSun } from 'lucide-react';

export const SiteCoordinates = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: '23.4',
    longitude: '15.7',
    elevation: '2341',
    area: '500',
  });

  return (
    <div className="space-y-6">
      {/* Coordinate Inputs */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Latitude (°N/S)
            </label>
            <div className="relative">
              <input
                type="text"
                value={coordinates.latitude}
                onChange={(e) => setCoordinates(prev => ({ ...prev, latitude: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Compass className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Longitude (°E/W)
            </label>
            <div className="relative">
              <input
                type="text"
                value={coordinates.longitude}
                onChange={(e) => setCoordinates(prev => ({ ...prev, longitude: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Compass className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Elevation (m)
          </label>
          <div className="relative">
            <input
              type="text"
              value={coordinates.elevation}
              onChange={(e) => setCoordinates(prev => ({ ...prev, elevation: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Mountain className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Analysis Area (m²)
          </label>
          <div className="relative">
            <input
              type="text"
              value={coordinates.area}
              onChange={(e) => setCoordinates(prev => ({ ...prev, area: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Ruler className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Site Conditions */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Current Conditions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Surface Temperature</span>
            <div className="flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900">127°C</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Solar Exposure</span>
            <span className="text-gray-900">89%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Surface Stability</span>
            <span className="text-gray-900">High</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Analyze Site
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};