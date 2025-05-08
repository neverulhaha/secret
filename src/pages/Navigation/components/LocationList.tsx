import React from 'react';
import { Home, FlaskRound as Flask, Rocket, Battery, Building2, Search } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Habitat Complex',
    type: 'residential',
    icon: Home,
    occupancy: 24,
    status: 'operational',
  },
  {
    id: 2,
    name: 'Research Laboratory',
    type: 'research',
    icon: Flask,
    occupancy: 8,
    status: 'operational',
  },
  {
    id: 3,
    name: 'Landing Zone',
    type: 'transport',
    icon: Rocket,
    occupancy: 2,
    status: 'operational',
  },
  {
    id: 4,
    name: 'Power Station',
    type: 'utility',
    icon: Battery,
    occupancy: 0,
    status: 'maintenance',
  },
  {
    id: 5,
    name: 'Storage Facility',
    type: 'storage',
    icon: Building2,
    occupancy: 3,
    status: 'operational',
  },
];

export const LocationList = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search locations..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="divide-y">
        {locations.map((location) => (
          <div key={location.id} className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <location.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{location.name}</h3>
                <p className="text-sm text-gray-600">
                  Occupancy: {location.occupancy} personnel
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                location.status === 'operational'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {location.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};