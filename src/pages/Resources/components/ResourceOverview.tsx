import React from 'react';
import { Droplets, Wind, Zap, FlaskRound as Flask } from 'lucide-react';

const resources = [
  {
    name: 'Water',
    icon: Droplets,
    current: 8500,
    total: 10000,
    unit: 'liters',
    status: 'optimal',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Oxygen',
    icon: Wind,
    current: 950,
    total: 1000,
    unit: 'kg',
    status: 'warning',
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    name: 'Power',
    icon: Zap,
    current: 450,
    total: 500,
    unit: 'kW',
    status: 'optimal',
    color: 'text-green-600 bg-green-100',
  },
  {
    name: 'Hydrogen',
    icon: Flask,
    current: 180,
    total: 200,
    unit: 'kg',
    status: 'critical',
    color: 'text-red-600 bg-red-100',
  },
];

export const ResourceOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <div key={resource.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${resource.color}`}>
              <resource.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
              <p className="text-sm text-gray-600">
                {resource.current} / {resource.total} {resource.unit}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {Math.round((resource.current / resource.total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  resource.status === 'optimal'
                    ? 'bg-green-600'
                    : resource.status === 'warning'
                    ? 'bg-yellow-600'
                    : 'bg-red-600'
                }`}
                style={{ width: `${(resource.current / resource.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};