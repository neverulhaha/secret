import React from 'react';
import { ModuleGrid } from './components/ModuleGrid';
import { ModuleSelector } from './components/ModuleSelector';
import { PlacementConstraints } from './components/PlacementConstraints';
import { ModuleConnections } from './components/ModuleConnections';
import { Save, Download } from 'lucide-react';

export const ModulePlacement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Module Placement</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Layout
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Placement Grid */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Placement Grid</h2>
          </div>
          <div className="p-6">
            <ModuleGrid />
          </div>
        </div>

        {/* Module Selection */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Module Selection</h2>
            </div>
            <div className="p-6">
              <ModuleSelector />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Placement Constraints</h2>
            </div>
            <div className="p-6">
              <PlacementConstraints />
            </div>
          </div>
        </div>
      </div>

      {/* Module Connections */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Module Connections</h2>
        </div>
        <div className="p-6">
          <ModuleConnections />
        </div>
      </div>
    </div>
  );
};