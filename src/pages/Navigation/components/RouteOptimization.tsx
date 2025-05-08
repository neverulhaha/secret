import React from 'react';
import { Navigation2, Clock, AlertTriangle } from 'lucide-react';

export const RouteOptimization = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Starting Point
          </label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Habitat Complex</option>
            <option>Research Laboratory</option>
            <option>Landing Zone</option>
            <option>Power Station</option>
            <option>Storage Facility</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Research Laboratory</option>
            <option>Habitat Complex</option>
            <option>Landing Zone</option>
            <option>Power Station</option>
            <option>Storage Facility</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transport Type
          </label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Walking</option>
            <option>Rover</option>
            <option>Automated Transport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Standard</option>
            <option>Urgent</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Navigation2 className="w-5 h-5" />
          <span>Recommended Route: Path B via Central Corridor</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>Estimated Time: 12 minutes</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-600">
          <AlertTriangle className="w-5 h-5" />
          <span>Note: Maintenance work in Section C3</span>
        </div>
      </div>

      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Calculate Route
      </button>
    </div>
  );
};