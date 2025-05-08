import React from 'react';
import { Building2, Users, Battery, Droplets } from 'lucide-react';

const infrastructureData = [
  {
    category: 'Habitat Modules',
    icon: Building2,
    metrics: {
      utilization: 85,
      maintenance: 95,
      efficiency: 88,
    },
    trend: 'up',
  },
  {
    category: 'Research Facilities',
    icon: Users,
    metrics: {
      utilization: 78,
      maintenance: 92,
      efficiency: 85,
    },
    trend: 'stable',
  },
  {
    category: 'Power Systems',
    icon: Battery,
    metrics: {
      utilization: 92,
      maintenance: 88,
      efficiency: 90,
    },
    trend: 'up',
  },
  {
    category: 'Life Support',
    icon: Droplets,
    metrics: {
      utilization: 75,
      maintenance: 96,
      efficiency: 94,
    },
    trend: 'up',
  },
];

export const InfrastructureAnalytics = () => {
  return (
    <div className="space-y-6">
      {infrastructureData.map((item) => (
        <div key={item.category} className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <item.icon className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">{item.category}</h3>
          </div>

          <div className="space-y-4">
            {Object.entries(item.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 capitalize">{key}</span>
                  <span className="font-medium text-gray-900">{value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Overall Performance</span>
              <span className={`font-medium ${
                item.trend === 'up' 
                  ? 'text-green-600' 
                  : item.trend === 'down' 
                  ? 'text-red-600' 
                  : 'text-blue-600'
              }`}>
                {item.trend === 'up' ? '↑ Improving' : item.trend === 'down' ? '↓ Declining' : '→ Stable'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};