import React from 'react';
import { HealthMonitoring } from './components/HealthMonitoring';
import { MedicalProtocols } from './components/MedicalProtocols';
import { HealthReports } from './components/HealthReports';
import { VitalStats } from './components/VitalStats';
import { FilePlus2 } from 'lucide-react';

export const Medical = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Medical Center</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <FilePlus2 className="w-4 h-4" />
            New Medical Record
          </button>
        </div>
      </div>

      {/* Vital Statistics Overview */}
      <VitalStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Monitoring */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Health Monitoring</h2>
          </div>
          <div className="p-6">
            <HealthMonitoring />
          </div>
        </div>

        {/* Medical Protocols */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Medical Protocols</h2>
          </div>
          <div className="p-6">
            <MedicalProtocols />
          </div>
        </div>
      </div>

      {/* Health Reports */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Health Reports</h2>
        </div>
        <div className="p-6">
          <HealthReports />
        </div>
      </div>
    </div>
  );
};