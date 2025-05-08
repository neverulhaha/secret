import React from 'react';
import { AlertTriangle, CheckCircle2, Clock, Bell, Shield } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Power Distribution Anomaly',
    description: 'Unusual power consumption in Module E7',
    time: '10 minutes ago',
    status: 'active',
  },
  {
    id: 2,
    type: 'critical',
    title: 'Environmental Alert',
    description: 'CO2 levels rising in Research Lab',
    time: '15 minutes ago',
    status: 'investigating',
  },
  {
    id: 3,
    type: 'info',
    title: 'System Update Required',
    description: 'Security patches available for deployment',
    time: '1 hour ago',
    status: 'resolved',
  },
];

const getAlertStyles = (type: string) => {
  switch (type) {
    case 'critical':
      return 'bg-red-50 border-red-200';
    case 'warning':
      return 'bg-yellow-50 border-yellow-200';
    case 'info':
      return 'bg-blue-50 border-blue-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return (
        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
          Active
        </span>
      );
    case 'investigating':
      return (
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
          Investigating
        </span>
      );
    case 'resolved':
      return (
        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
          Resolved
        </span>
      );
    default:
      return null;
  }
};

export const AlertsManagement = () => {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`border rounded-lg p-4 ${getAlertStyles(alert.type)}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              {alert.type === 'critical' ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : alert.type === 'warning' ? (
                <Bell className="w-5 h-5 text-yellow-600" />
              ) : (
                <Shield className="w-5 h-5 text-blue-600" />
              )}
              <h3 className="font-medium text-gray-900">{alert.title}</h3>
            </div>
            {getStatusBadge(alert.status)}
          </div>

          <p className="text-sm text-gray-600 mb-3">{alert.description}</p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              {alert.time}
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Investigate
              </button>
              <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Resolve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};