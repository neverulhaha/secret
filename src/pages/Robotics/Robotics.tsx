import React from 'react';
import { RobotControl } from './components/RobotControl';
import { TelescopeControl } from './components/TelescopeControl';
import { DroneMonitoring } from './components/DroneMonitoring';
import { MissionStatus } from './components/MissionStatus';
import { Play } from 'lucide-react';

export const Robotics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Robotics & Equipment Control</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Play className="w-4 h-4" />
            Start New Mission
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Robot Control Interface */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Robot Control Center</h2>
          </div>
          <div className="p-6">
            <RobotControl />
          </div>
        </div>

        {/* Mission Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Active Missions</h2>
          </div>
          <div className="p-6">
            <MissionStatus />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Telescope Control */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Telescope Operations</h2>
          </div>
          <div className="p-6">
            <TelescopeControl />
          </div>
        </div>

        {/* Drone Monitoring */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Drone Fleet Status</h2>
          </div>
          <div className="p-6">
            <DroneMonitoring />
          </div>
        </div>
      </div>
    </div>
  );
};