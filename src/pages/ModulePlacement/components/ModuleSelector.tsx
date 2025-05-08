import React from 'react';
import { Home, FlaskRound as Flask, Battery, Wind, Package, Notebook as Robot } from 'lucide-react';

const modules = [
  {
    id: 'habitat',
    name: 'Habitat Module',
    icon: Home,
    color: 'text-blue-600 bg-blue-100',
    size: { width: 4, height: 4 },
    description: 'Living quarters and life support',
  },
  {
    id: 'research',
    name: 'Research Lab',
    icon: Flask,
    color: 'text-purple-600 bg-purple-100',
    size: { width: 3, height: 3 },
    description: 'Scientific research facilities',
  },
  {
    id: 'power',
    name: 'Power Station',
    icon: Battery,
    color: 'text-yellow-600 bg-yellow-100',
    size: { width: 3, height: 2 },
    description: 'Energy generation and storage',
  },
  {
    id: 'lifesupport',
    name: 'Life Support',
    icon: Wind,
    color: 'text-green-600 bg-green-100',
    size: { width: 2, height: 2 },
    description: 'Air and water recycling',
  },
  {
    id: 'storage',
    name: 'Storage',
    icon: Package,
    color: 'text-orange-600 bg-orange-100',
    size: { width: 3, height: 2 },
    description: 'Resource and equipment storage',
  },
  {
    id: 'robotics',
    name: 'Robotics Bay',
    icon: Robot,
    color: 'text-red-600 bg-red-100',
    size: { width: 2, height: 3 },
    description: 'Robot maintenance and control',
  },
];

export const ModuleSelector = () => {
  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div
          key={module.id}
          className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          draggable="true"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${module.color}`}>
              <module.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{module.name}</h3>
              <p className="text-sm text-gray-600">
                {module.size.width}x{module.size.height} units
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{module.description}</p>
        </div>
      ))}

      <div className="mt-6 pt-6 border-t">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Custom Module
        </button>
      </div>
    </div>
  );
};