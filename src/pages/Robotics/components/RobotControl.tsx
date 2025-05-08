import React, { useState } from 'react';
import { Notebook as Robot, RotateCw, Pause, Play, Power, Gamepad2, Settings, AlertTriangle } from 'lucide-react';

const robots = [
  {
    id: 'rb-001',
    name: 'Explorer Bot 1',
    type: 'Surface Explorer',
    status: 'active',
    battery: 85,
    location: 'Sector A-7',
    currentTask: 'Mineral Analysis',
  },
  {
    id: 'rb-002',
    name: 'Constructor Bot 2',
    type: 'Construction',
    status: 'charging',
    battery: 30,
    location: 'Base Station',
    currentTask: 'None',
  },
  {
    id: 'rb-003',
    name: 'Maintenance Bot 3',
    type: 'Maintenance',
    status: 'warning',
    battery: 65,
    location: 'Module C',
    currentTask: 'Panel Repair',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-green-600 bg-green-100';
    case 'charging':
      return 'text-blue-600 bg-blue-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Play className="w-4 h-4 text-green-600" />;
    case 'charging':
      return <Power className="w-4 h-4 text-blue-600" />;
    case 'warning':
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    default:
      return null;
  }
};

export const RobotControl = () => {
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Robot Selection */}
      <div className="grid grid-cols-3 gap-4">
        {robots.map((robot) => (
          <div
            key={robot.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedRobot === robot.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedRobot(robot.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${getStatusColor(robot.status)}`}>
                <Robot className="w-5 h-5" />
              </div>
              {getStatusIcon(robot.status)}
            </div>
            <h3 className="font-medium text-gray-900">{robot.name}</h3>
            <p className="text-sm text-gray-600">{robot.type}</p>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Battery</span>
                <span className="font-medium text-gray-900">{robot.battery}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    robot.battery > 60
                      ? 'bg-green-600'
                      : robot.battery > 20
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  }`}
                  style={{ width: `${robot.battery}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Interface */}
      {selectedRobot && (
        <div className="border-t pt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Robot Controls</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <RotateCw className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Operation Mode
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Autonomous</option>
                <option>Manual Control</option>
                <option>Semi-Autonomous</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Assignment
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Mineral Analysis</option>
                <option>Surface Mapping</option>
                <option>Equipment Maintenance</option>
                <option>Construction Support</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Manual Override
            </button>
            <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2">
              <Pause className="w-5 h-5" />
              Pause Operation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};