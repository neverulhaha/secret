import React from 'react';
import { TrendingUp, Clock, Battery, Shield } from 'lucide-react';

export const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Overall Efficiency</p>
            <p className="text-2xl font-bold text-gray-900">94.5%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Uptime</p>
            <p className="text-2xl font-bold text-gray-900">99.9%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Battery className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Resource Optimization</p>
            <p className="text-2xl font-bold text-gray-900">92.8%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Safety Rating</p>
            <p className="text-2xl font-bold text-gray-900">98.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
};