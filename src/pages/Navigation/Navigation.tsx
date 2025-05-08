import React from 'react';
import { BaseMap } from './components/BaseMap';
import { MovementTracking } from './components/MovementTracking';
import { LocationList } from './components/LocationList';
import { RouteOptimization } from './components/RouteOptimization';

export const Navigation = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Base Navigation System</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Real-time View
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Download Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Map View */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Lunar Base Map</h2>
          </div>
          <div className="p-6">
            <BaseMap />
          </div>
        </div>

        {/* Movement Tracking */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Active Movements</h2>
          </div>
          <div className="p-6">
            <MovementTracking />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Base Locations</h2>
          </div>
          <div className="p-6">
            <LocationList />
          </div>
        </div>

        {/* Route Optimization */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Route Planning</h2>
          </div>
          <div className="p-6">
            <RouteOptimization />
          </div>
        </div>
      </div>
    </div>
  );
};