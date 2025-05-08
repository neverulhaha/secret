import React from 'react';
import { Shield, AlertTriangle, CheckCircle2, Clock, Users, Lock } from 'lucide-react';

const protocols = [
  {
    id: 1,
    name: 'Emergency Response Protocol',
    status: 'active',
    lastUpdated: '2025-03-15',
    type: 'critical',
    assignedTeam: 'Emergency Response',
    steps: [
      'Initiate emergency shutdown',
      'Secure critical systems',
      'Evacuate affected areas',
      'Deploy response team',
    ],
  },
  {
    id: 2,
    name: 'Access Control Protocol',
    status: 'active',
    lastUpdated: '2025-03-14',
    type: 'standard',
    assignedTeam: 'Security',
    steps: [
      'Verify credentials',
      'Log access attempts',
      'Monitor restricted areas',
      'Report violations',
    ],
  },
  {
    id: 3,
    name: 'System Maintenance Protocol',
    status: 'scheduled',
    lastUpdated: '2025-03-13',
    type: 'maintenance',
    assignedTeam: 'Engineering',
    steps: [
      'Check system integrity',
      'Update security patches',
      'Test backup systems',
      'Document changes',
    ],
  },
];

const getProtocolStyles = (type: string) => {
  switch (type) {
    case 'critical':
      return 'border-red-200 bg-red-50';
    case 'standard':
      return 'border-blue-200 bg-blue-50';
    case 'maintenance':
      return 'border-green-200 bg-green-50';
    default:
      return 'border-gray-200 bg-gray-50';
  }
};

export const SafetyProtocols = () => {
  return (
    <div className="space-y-6">
      {protocols.map((protocol) => (
        <div
          key={protocol.id}
          className={`border rounded-lg p-4 ${getProtocolStyles(protocol.type)}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                protocol.type === 'critical'
                  ? 'bg-red-100'
                  : protocol.type === 'standard'
                  ? 'bg-blue-100'
                  : 'bg-green-100'
              }`}>
                <Shield className={`w-5 h-5 ${
                  protocol.type === 'critical'
                    ? 'text-red-600'
                    : protocol.type === 'standard'
                    ? 'text-blue-600'
                    : 'text-green-600'
                }`} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{protocol.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  {protocol.assignedTeam}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Updated: {protocol.lastUpdated}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {protocol.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-700">{step}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Activate Protocol
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};