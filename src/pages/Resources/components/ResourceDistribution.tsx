import React from 'react';
import { Building2, Home, FlaskRound as Flask, PenTool as Tool } from 'lucide-react';

const facilities = [
  {
    name: 'Habitat Modules',
    icon: Home,
    resources: [
      { name: 'Water', allocation: 40, usage: 35 },
      { name: 'Oxygen', allocation: 45, usage: 42 },
      { name: 'Power', allocation: 30, usage: 28 },
    ],
  },
  {
    name: 'Research Labs',
    icon: Flask,
    resources: [
      { name: 'Water', allocation: 20, usage: 18 },
      { name: 'Oxygen', allocation: 25, usage: 23 },
      { name: 'Power', allocation: 35, usage: 34 },
    ],
  },
  {
    name: 'Manufacturing',
    icon: Tool,
    resources: [
      { name: 'Water', allocation: 25, usage: 22 },
      { name: 'Oxygen', allocation: 15, usage: 14 },
      { name: 'Power', allocation: 25, usage: 23 },
    ],
  },
  {
    name: 'Storage Facilities',
    icon: Building2,
    resources: [
      { name: 'Water', allocation: 15, usage: 12 },
      { name: 'Oxygen', allocation: 15, usage: 13 },
      { name: 'Power', allocation: 10, usage: 9 },
    ],
  },
];

export const ResourceDistribution = () => {
  return (
    <div className="space-y-6">
      {facilities.map((facility) => (
        <div key={facility.name} className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <facility.icon className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="font-medium text-gray-900">{facility.name}</h3>
          </div>

          <div className="space-y-4">
            {facility.resources.map((resource) => (
              <div key={resource.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{resource.name}</span>
                  <span className="text-gray-900 font-medium">
                    {resource.usage}% / {resource.allocation}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(resource.usage / resource.allocation) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};