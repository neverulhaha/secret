import React from 'react';
import { AlertTriangle, Shield, Mountain, Zap, Radiation } from 'lucide-react';

const hazards = [
  {
    type: 'Terrain Hazards',
    icon: Mountain,
    color: 'text-orange-600 bg-orange-100',
    risks: [
      { name: 'Steep Slopes', level: 'medium', value: 65 },
      { name: 'Unstable Ground', level: 'low', value: 25 },
      { name: 'Boulder Fields', level: 'high', value: 85 },
    ],
  },
  {
    type: 'Environmental Hazards',
    icon: Zap,
    color: 'text-yellow-600 bg-yellow-100',
    risks: [
      { name: 'Temperature Extremes', level: 'high', value: 90 },
      { name: 'Dust Storms', level: 'medium', value: 55 },
      { name: 'Micrometeorites', level: 'low', value: 30 },
    ],
  },
  {
    type: 'Radiation Hazards',
    icon: Radiation,
    color: 'text-purple-600 bg-purple-100',
    risks: [
      { name: 'Solar Radiation', level: 'high', value: 95 },
      { name: 'Cosmic Rays', level: 'high', value: 88 },
      { name: 'Surface Radiation', level: 'medium', value: 60 },
    ],
  },
];

const getRiskColor = (level: string) => {
  switch (level) {
    case 'low':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'high':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export const HazardAnalysis = () => {
  return (
    <div className="space-y-6">
      {/* Overall Risk Level */}
      <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Overall Risk Level</h3>
            <p className="text-2xl font-bold text-orange-600">Moderate</p>
          </div>
        </div>
        <Shield className="w-8 h-8 text-orange-600" />
      </div>

      {/* Hazard Categories */}
      <div className="space-y-4">
        {hazards.map((hazard) => (
          <div key={hazard.type} className="border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${hazard.color}`}>
                <hazard.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900">{hazard.type}</h3>
            </div>

            <div className="space-y-3">
              {hazard.risks.map((risk) => (
                <div key={risk.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{risk.name}</span>
                    <span className={`font-medium ${getRiskColor(risk.level)}`}>
                      {risk.level.toUpperCase()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        risk.level === 'low'
                          ? 'bg-green-600'
                          : risk.level === 'medium'
                          ? 'bg-yellow-600'
                          : 'bg-red-600'
                      }`}
                      style={{ width: `${risk.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mitigation Recommendations */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Mitigation Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            Install enhanced radiation shielding
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
            Implement dust mitigation systems
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            Regular terrain stability monitoring
          </li>
        </ul>
      </div>
    </div>
  );
};