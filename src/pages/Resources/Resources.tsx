import React from 'react';
import { ResourceOverview } from './components/ResourceOverview';
import { ResourceDistribution } from './components/ResourceDistribution';
import { ResourceAnalytics } from './components/ResourceAnalytics';
import { ResourceAllocation } from './components/ResourceAllocation';
import { SustainabilityMetrics } from './components/SustainabilityMetrics';

export const Resources = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Resource Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Update Resources
        </button>
      </div>

      {/* Resource Overview Cards */}
      <ResourceOverview />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Distribution */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Resource Distribution</h2>
          </div>
          <div className="p-6">
            <ResourceDistribution />
          </div>
        </div>

        {/* Resource Analytics */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Resource Analytics</h2>
          </div>
          <div className="p-6">
            <ResourceAnalytics />
          </div>
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Resource Allocation</h2>
        </div>
        <div className="p-6">
          <ResourceAllocation />
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Sustainability Metrics</h2>
        </div>
        <div className="p-6">
          <SustainabilityMetrics />
        </div>
      </div>
    </div>
  );
};