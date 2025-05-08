import React from 'react';
import { InfrastructureMap } from './components/InfrastructureMap';
import { FacilityPlanner } from './components/FacilityPlanner';
import { SafetyAnalysis } from './components/SafetyAnalysis';
import { OptimizationResults } from './components/OptimizationResults';

export const Infrastructure = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Infrastructure Planning</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Layout
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Export Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Planning View */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Infrastructure Layout</h2>
          </div>
          <div className="p-6">
            <InfrastructureMap />
          </div>
        </div>

        {/* Facility Planning Controls */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Facility Planning</h2>
          </div>
          <div className="p-6">
            <FacilityPlanner />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Analysis */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Safety Analysis</h2>
          </div>
          <div className="p-6">
            <SafetyAnalysis />
          </div>
        </div>

        {/* Optimization Results */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Optimization Results</h2>
          </div>
          <div className="p-6">
            <OptimizationResults />
          </div>
        </div>
      </div>
    </div>
  );
};