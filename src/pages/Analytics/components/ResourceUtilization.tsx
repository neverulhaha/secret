import React from 'react';
import { Droplets, Wind, Zap, Package, TrendingUp, TrendingDown } from 'lucide-react';

const resources = [
  {
    name: 'Water Resources',
    icon: Droplets,
    color: 'text-blue-600 bg-blue-100',
    metrics: {
      current: 85,
      target: 80,
      trend: 'up',
      efficiency: 92,
    },
  },
  {
    name: 'Oxygen Supply',
    icon: Wind,
    color: 'text-green-600 bg-green-100',
    metrics: {
      current: 95,
      target: 90,
      trend: 'up',
      efficiency: 96,
    },
  },
  {
    name: 'Power Usage',
    icon: Zap,
    color: 'text-yellow-600 bg-yellow-100',
    metrics: {
      current: 78,
      target: 75,
      trend: 'down',
      efficiency: 88,
    },
  },
  {
    name: 'Storage Capacity',
    icon: Package,
    color: 'text-purple-600 bg-purple-100',
    metrics: {
      current: 82,
      target: 85,
      trend: 'up',
      efficiency: 90,
    },
  },
];

export const ResourceUtilization = () => {
  return (
    <div className="space-y-6">
      {resources.map((resource) => (
        <div key={resource.name} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${resource.color}`}>
                <resource.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900">{resource.name}</h3>
            </div>
            {resource.metrics.trend === 'up' ? (
              <TrendingUp className="w-5 h-5 text-green-600" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-600" />
            )}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Current Usage</span>
                <span className="font-medium text-gray-900">{resource.metrics.current}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    resource.metrics.current > resource.metrics.target
                      ? 'bg-green-600'
                      : 'bg-yellow-600'
                  }`}
                  style={{ width: `${resource.metrics.current}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Target Efficiency</span>
              <span className="font-medium text-gray-900">{resource.metrics.target}%</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Resource Efficiency</span>
              <span className={`font-medium ${
                resource.metrics.efficiency >= 90
                  ? 'text-green-600'
                  : resource.metrics.efficiency >= 80
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}>
                {resource.metrics.efficiency}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};