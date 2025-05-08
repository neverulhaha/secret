import React from 'react';
import { Recycle, Leaf, Battery, Droplets } from 'lucide-react';

const metrics = [
  {
    name: 'Resource Recycling',
    icon: Recycle,
    color: 'text-green-600 bg-green-100',
    metrics: [
      { name: 'Water Recycling', value: '99.9%', trend: '+0.2%' },
      { name: 'Air Filtration', value: '99.5%', trend: '+0.1%' },
      { name: 'Waste Processing', value: '98.2%', trend: '+0.3%' },
    ],
  },
  {
    name: 'Energy Efficiency',
    icon: Battery,
    color: 'text-blue-600 bg-blue-100',
    metrics: [
      { name: 'Solar Efficiency', value: '92.5%', trend: '+1.2%' },
      { name: 'Power Distribution', value: '95.8%', trend: '+0.5%' },
      { name: 'Storage Efficiency', value: '94.1%', trend: '+0.8%' },
    ],
  },
  {
    name: 'Resource Conservation',
    icon: Leaf,
    color: 'text-yellow-600 bg-yellow-100',
    metrics: [
      { name: 'Water Usage', value: '85.2%', trend: '-2.1%' },
      { name: 'Oxygen Production', value: '105%', trend: '+3.2%' },
      { name: 'Material Reuse', value: '78.9%', trend: '+1.5%' },
    ],
  },
  {
    name: 'System Optimization',
    icon: Droplets,
    color: 'text-purple-600 bg-purple-100',
    metrics: [
      { name: 'Process Efficiency', value: '91.3%', trend: '+0.7%' },
      { name: 'Resource Recovery', value: '88.7%', trend: '+1.1%' },
      { name: 'Waste Reduction', value: '82.4%', trend: '+2.3%' },
    ],
  },
];

export const SustainabilityMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((category) => (
        <div key={category.name} className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${category.color}`}>
              <category.icon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-900">{category.name}</h3>
          </div>

          <div className="space-y-4">
            {category.metrics.map((metric) => (
              <div key={metric.name} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{metric.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{metric.value}</span>
                  <span
                    className={`text-sm ${
                      metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};