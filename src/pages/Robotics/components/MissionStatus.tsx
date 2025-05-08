import React from 'react';
import { Clock, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

const missions = [
  {
    id: 1,
    name: 'Surface Analysis',
    robot: 'Explorer Bot 1',
    status: 'in_progress',
    progress: 65,
    eta: '45 minutes',
  },
  {
    id: 2,
    name: 'Panel Installation',
    robot: 'Constructor Bot 2',
    status: 'completed',
    progress: 100,
    eta: '0 minutes',
  },
  {
    id: 3,
    name: 'Equipment Repair',
    robot: 'Maintenance Bot 3',
    status: 'warning',
    progress: 35,
    eta: '2 hours',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'in_progress':
      return <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-600 bg-green-100';
    case 'in_progress':
      return 'text-blue-600 bg-blue-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const MissionStatus = () => {
  return (
    <div className="space-y-4">
      {missions.map((mission) => (
        <div key={mission.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-medium text-gray-900">{mission.name}</h3>
              <p className="text-sm text-gray-600">{mission.robot}</p>
            </div>
            {getStatusIcon(mission.status)}
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{mission.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    mission.status === 'completed'
                      ? 'bg-green-600'
                      : mission.status === 'warning'
                      ? 'bg-yellow-600'
                      : 'bg-blue-600'
                  }`}
                  style={{ width: `${mission.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-4 h-4" />
                ETA
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  mission.status
                )}`}
              >
                {mission.eta}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};