import React from 'react';
import { Heart, Activity, Thermometer, Brain, AlertTriangle, CheckCircle2 } from 'lucide-react';

const crewMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Mission Commander',
    vitals: {
      heartRate: 72,
      bloodPressure: '120/80',
      temperature: 36.6,
      oxygenSaturation: 98,
    },
    status: 'normal',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Science Officer',
    vitals: {
      heartRate: 85,
      bloodPressure: '135/85',
      temperature: 37.2,
      oxygenSaturation: 96,
    },
    status: 'warning',
  },
  {
    id: 3,
    name: 'Emily Parker',
    role: 'Medical Officer',
    vitals: {
      heartRate: 68,
      bloodPressure: '118/75',
      temperature: 36.8,
      oxygenSaturation: 99,
    },
    status: 'normal',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'normal':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    default:
      return null;
  }
};

export const HealthMonitoring = () => {
  return (
    <div className="space-y-4">
      {crewMembers.map((member) => (
        <div key={member.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
            {getStatusIcon(member.status)}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-600">Heart Rate</span>
                <span className="text-sm font-medium text-gray-900">
                  {member.vitals.heartRate} bpm
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Blood Pressure</span>
                <span className="text-sm font-medium text-gray-900">
                  {member.vitals.bloodPressure} mmHg
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-gray-600">Temperature</span>
                <span className="text-sm font-medium text-gray-900">
                  {member.vitals.temperature}°C
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">O₂ Saturation</span>
                <span className="text-sm font-medium text-gray-900">
                  {member.vitals.oxygenSaturation}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};