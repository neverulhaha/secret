import React from 'react';
import { SystemMonitoring } from './components/SystemMonitoring';
import { AlertsManagement } from './components/AlertsManagement';
import { SecurityDashboard } from './components/SecurityDashboard';
import { SafetyProtocols } from './components/SafetyProtocols';
import { Bell, Download } from 'lucide-react';

export const Security = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Security Control Center</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Emergency Protocols
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Security Overview Dashboard */}
      <SecurityDashboard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Monitoring */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">System Monitoring</h2>
          </div>
          <div className="p-6">
            <SystemMonitoring />
          </div>
        </div>

        {/* Alerts Management */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Active Alerts</h2>
          </div>
          <div className="p-6">
            <AlertsManagement />
          </div>
        </div>
      </div>

      {/* Safety Protocols */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Safety Protocols</h2>
        </div>
        <div className="p-6">
          <SafetyProtocols />
        </div>
      </div>
    </div>
  );
};