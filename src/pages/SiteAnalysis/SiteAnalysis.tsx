import React from 'react';
import { TerrainMap } from './components/TerrainMap';
import { SiteCoordinates } from './components/SiteCoordinates';
import { ResourceMapping } from './components/ResourceMapping';
import { HazardAnalysis } from './components/HazardAnalysis';
import { AnalysisHistory } from './components/AnalysisHistory';
import { Download } from 'lucide-react';

export const SiteAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Lunar Site Analysis</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start New Analysis
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Analysis View */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Terrain Analysis</h2>
          </div>
          <div className="p-6">
            <TerrainMap />
          </div>
        </div>

        {/* Coordinates Input */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Site Coordinates</h2>
          </div>
          <div className="p-6">
            <SiteCoordinates />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Mapping */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Resource Distribution</h2>
          </div>
          <div className="p-6">
            <ResourceMapping />
          </div>
        </div>

        {/* Hazard Analysis */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Hazard Assessment</h2>
          </div>
          <div className="p-6">
            <HazardAnalysis />
          </div>
        </div>
      </div>

      {/* Analysis History */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Analysis History</h2>
        </div>
        <div className="p-6">
          <AnalysisHistory />
        </div>
      </div>
    </div>
  );
};