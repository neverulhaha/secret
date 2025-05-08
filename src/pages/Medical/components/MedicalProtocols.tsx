import React from 'react';
import { Stethoscope, FileText, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

const protocols = [
  {
    id: 1,
    name: 'Daily Health Check',
    type: 'Routine',
    status: 'active',
    nextDue: '2 hours',
    description: 'Standard vital signs monitoring and health assessment',
  },
  {
    id: 2,
    name: 'Radiation Exposure Check',
    type: 'Safety',
    status: 'warning',
    nextDue: 'Overdue',
    description: 'Monthly radiation exposure assessment for all crew members',
  },
  {
    id: 3,
    name: 'Mental Health Evaluation',
    type: 'Wellness',
    status: 'scheduled',
    nextDue: '3 days',
    description: 'Regular psychological assessment and support session',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'scheduled':
      return 'text-blue-600 bg-blue-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    case 'scheduled':
      return <Clock className="w-5 h-5 text-blue-600" />;
    default:
      return null;
  }
};

export const MedicalProtocols = () => {
  return (
    <div className="space-y-4">
      {protocols.map((protocol) => (
        <div key={protocol.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(protocol.status)}`}>
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{protocol.name}</h3>
                <p className="text-sm text-gray-600">{protocol.type}</p>
              </div>
            </div>
            {getStatusIcon(protocol.status)}
          </div>

          <p className="text-sm text-gray-600 mb-3">{protocol.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              Next due: {protocol.nextDue}
            </div>
            <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
              <FileText className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      ))}

      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Schedule New Protocol
      </button>
    </div>
  );
};