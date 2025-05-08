import React from 'react';
import { Users, Heart, Brain, ShieldAlert } from 'lucide-react';

export const VitalStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Crew Health Status</p>
            <p className="text-2xl font-bold text-gray-900">28/30</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Average Vitals</p>
            <p className="text-2xl font-bold text-gray-900">Normal</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Mental Health</p>
            <p className="text-2xl font-bold text-gray-900">Stable</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <ShieldAlert className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Medical Alerts</p>
            <p className="text-2xl font-bold text-gray-900">2 Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};