import React from 'react';
import { Shield, AlertTriangle, Ruler } from 'lucide-react';

const constraints = [
  {
    type: 'safety',
    name: 'Minimum Distance',
    value: '2 units',
    description: 'Minimum spacing between critical modules',
    status: 'active',
  },
  {
    type: 'structural',
    name: 'Weight Distribution',
    value: 'Balanced',
    description: 'Even distribution of heavy modules',
    status: 'warning',
  },
  {
    type: 'connectivity',
    name: 'Access Routes',
    value: 'Required',
    description: 'Clear paths between connected modules',
    status: 'active',
  },
];

export const PlacementConstraints = () => {
  return (
    <div className="space-y-4">
      {constraints.map((constraint) => (
        <div key={constraint.name} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                constraint.status === 'active' 
                  ? 'bg-green-100' 
                  : 'bg-yellow-100'
              }`}>
                <Shield className={`w-5 h-5 ${
                  constraint.status === 'active'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }`} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{constraint.name}</h3>
                <p className="text-sm text-gray-600">{constraint.value}</p>
              </div>
            </div>
            {constraint.status === 'warning' && (
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            )}
          </div>
          <p className="text-sm text-gray-600">{constraint.description}</p>
        </div>
      ))}

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Ruler className="w-5 h-5 text-gray-600" />
          <h4 className="font-medium text-gray-900">Custom Constraints</h4>
        </div>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Constraint name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Safety Distance</option>
            <option>Weight Limit</option>
            <option>Connection Requirement</option>
            <option>Environmental Control</option>
          </select>
          <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Constraint
          </button>
        </div>
      </div>
    </div>
  );
};