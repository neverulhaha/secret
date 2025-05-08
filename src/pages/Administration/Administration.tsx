import React from 'react';
import { DocumentManagement } from './components/DocumentManagement';
import { LogisticsOverview } from './components/LogisticsOverview';
import { WorkforceManagement } from './components/WorkforceManagement';
import { AdminDashboard } from './components/AdminDashboard';
import { FilePlus, Download } from 'lucide-react';

export const Administration = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <FilePlus className="w-4 h-4" />
            New Document
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Reports
          </button>
        </div>
      </div>

      {/* Admin Overview Dashboard */}
      <AdminDashboard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Document Management */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Document Management</h2>
          </div>
          <div className="p-6">
            <DocumentManagement />
          </div>
        </div>

        {/* Logistics Overview */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Logistics & Transportation</h2>
          </div>
          <div className="p-6">
            <LogisticsOverview />
          </div>
        </div>
      </div>

      {/* Workforce Management */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Workforce Management</h2>
        </div>
        <div className="p-6">
          <WorkforceManagement />
        </div>
      </div>
    </div>
  );
};