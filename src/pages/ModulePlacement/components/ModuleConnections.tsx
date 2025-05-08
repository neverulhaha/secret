import React from 'react';
import { Link2, AlertTriangle, CheckCircle2 } from 'lucide-react';

const connections = [
  {
    from: 'Habitat Module A',
    to: 'Life Support',
    type: 'Critical',
    status: 'optimal',
    requirements: ['Direct access', 'Pressurized corridor'],
  },
  {
    from: 'Research Lab',
    to: 'Power Station',
    type: 'Power',
    status: 'warning',
    requirements: ['Protected conduits', 'Redundant lines'],
  },
  {
    from: 'Storage',
    to: 'Robotics Bay',
    type: 'Logistics',
    status: 'optimal',
    requirements: ['Wide corridor', 'Automated transport'],
  },
];

export const ModuleConnections = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections.map((connection, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Link2 className={`w-5 h-5 ${
                  connection.status === 'optimal' 
                    ? 'text-green-600' 
                    : 'text-yellow-600'
                }`} />
                <span className="font-medium text-gray-900">{connection.type} Connection</span>
              </div>
              {connection.status === 'optimal' ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <span className="text-gray-600">From:</span>
                <span className="ml-2 font-medium text-gray-900">{connection.from}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-gray-600">To:</span>
                <span className="ml-2 font-medium text-gray-900">{connection.to}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
              {connection.requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  {req}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Connection
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Verify All
        </button>
      </div>
    </div>
  );
};