import React from 'react';
import { InfrastructureAnalytics } from './components/InfrastructureAnalytics';
import { ResourceUtilization } from './components/ResourceUtilization';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { OptimizationSuggestions } from './components/OptimizationSuggestions';
import { Download, BarChart3 } from 'lucide-react';

export const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Generate Report
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* Performance Overview */}
      <PerformanceMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infrastructure Analytics */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Infrastructure Analysis</h2>
          </div>
          <div className="p-6">
            <InfrastructureAnalytics />
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Resource Utilization</h2>
          </div>
          <div className="p-6">
            <ResourceUtilization />
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Optimization Recommendations</h2>
        </div>
        <div className="p-6">
          <OptimizationSuggestions />
        </div>
      </div>
    </div>
  );
};