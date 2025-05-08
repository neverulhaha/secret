import React from 'react';
import { Droplets, Mountain, FlaskRound as Flask, Battery, AlertTriangle, CheckCircle2 } from 'lucide-react';

const resources = [
  {
    name: 'Water Ice',
    icon: Droplets,
    concentration: 85,
    depth: '2.3m',
    status: 'optimal',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Regolith',
    icon: Mountain,
    concentration: 92,
    depth: 'Surface',
    status: 'optimal',
    color: 'text-gray-600 bg-gray-100',
  },
  {
    name: 'Helium-3',
    icon: Flask,
    concentration: 45,
    depth: '1.8m',
    status: 'warning',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    name: 'Solar Potential',
    icon: Battery,
    concentration: 95,
    depth: 'N/A',
    status: 'optimal',
    color: 'text-yellow-600 bg-yellow-100',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'optimal':
      return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    default:
      return null;
  }
};

export const ResourceMapping = () => {
  return (
    <div className="space-y-6">
      {/* Resource Cards */}
      <div className="grid grid-cols-2 gap-4">
        {resources.map((resource) => (
          <div key={resource.name} className="border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${resource.color}`}>
                <resource.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900">{resource.name}</h3>
              {getStatusIcon(resource.status)}
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Concentration</span>
                  <span className="font-medium text-gray-900">{resource.concentration}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      resource.status === 'optimal' ? 'bg-green-600' : 'bg-yellow-600'
                    }`}
                    style={{ width: `${resource.concentration}%` }}
                  />
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Depth</span>
                <span className="font-medium text-gray-900">{resource.depth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Distribution Map */}
      <div className="border rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Resource Distribution</h3>
        <div className="h-48 bg-gray-100 rounded-lg relative overflow-hidden">
          {/* Sample heat map visualization */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-500 via-green-500 to-red-500" />
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs">
            Concentration Density
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Update Analysis
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Export Data
        </button>
      </div>
    </div>
  );
};