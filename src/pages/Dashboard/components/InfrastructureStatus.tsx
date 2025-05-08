import React from 'react';
import { 
  Home, 
  Power, 
  Droplets, 
  Wind, 
  Wifi, 
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import type { InfrastructureSystem } from '../../../types/dashboard';

interface InfrastructureStatusProps {
  systems: InfrastructureSystem[];
}

const getIcon = (systemName: string) => {
  switch (systemName.toLowerCase()) {
    case 'habitat modules':
      return Home;
    case 'power systems':
      return Power;
    case 'water management':
      return Droplets;
    case 'air circulation':
      return Wind;
    case 'communications':
      return Wifi;
    case 'security systems':
      return ShieldCheck;
    default:
      return Home;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'optimal':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    case 'error':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'optimal':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'error':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const InfrastructureStatus: React.FC<InfrastructureStatusProps> = ({ systems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {systems.map((system) => {
        const Icon = getIcon(system.system_name);
        return (
          <div key={system.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getStatusColor(system.status)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{system.system_name}</h3>
                  <p className="text-sm text-gray-600">{system.details}</p>
                </div>
              </div>
              {getStatusIcon(system.status)}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {Object.entries(system.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</p>
                  <p className="font-medium text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};