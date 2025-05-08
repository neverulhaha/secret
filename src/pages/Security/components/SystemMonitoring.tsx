import React from 'react';
import { Battery, Thermometer, Wind, Wifi, Shield, Activity } from 'lucide-react';

const systems = [
  {
    name: 'Life Support Systems',
    icon: Wind,
    status: 'optimal',
    metrics: {
      pressure: '101.3 kPa',
      oxygen: '21%',
      co2: '0.04%',
    },
    lastCheck: '2 min ago',
  },
  {
    name: 'Power Distribution',
    icon: Battery,
    status: 'warning',
    metrics: {
      load: '85%',
      backup: '100%',
      efficiency: '92%',
    },
    lastCheck: '1 min ago',
  },
  {
    name: 'Communication Network',
    icon: Wifi,
    status: 'optimal',
    metrics: {
      uptime: '99.9%',
      latency: '120ms',
      bandwidth: '95%',
    },
    lastCheck: '30 sec ago',
  },
  {
    name: 'Environmental Control',
    icon: Thermometer,
    status: 'optimal',
    metrics: {
      temperature: '21°C',
      humidity: '45%',
      airflow: '100%',
    },
    lastCheck: '1 min ago',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'optimal':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'critical':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const SystemMonitoring = () => {
  return (
    <div className="space-y-4">
      {systems.map((system) => (
        <div key={system.name} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(system.status)}`}>
                <system.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{system.name}</h3>
                <p className="text-sm text-gray-600">Last check: {system.lastCheck}</p>
              </div>
            </div>
            <Shield className={`w-5 h-5 ${
              system.status === 'optimal' ? 'text-green-600' : 'text-yellow-600'
            }`} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(system.metrics).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm text-gray-600 capitalize">{key}</p>
                <p className="font-medium text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">System Health</span>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  system.status === 'optimal'
                    ? 'bg-green-600'
                    : system.status === 'warning'
                    ? 'bg-yellow-600'
                    : 'bg-red-600'
                }`}
                style={{ width: '95%' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};