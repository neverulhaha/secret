import React from 'react';
import { Bone as Drone, Battery, Signal, Navigation, AlertTriangle } from 'lucide-react';

const drones = [
  {
    id: 'drone-1',
    name: 'Surveyor 1',
    status: 'active',
    battery: 75,
    signal: 98,
    mission: 'Terrain Mapping',
    location: 'North Ridge',
  },
  {
    id: 'drone-2',
    name: 'Scout 2',
    status: 'warning',
    battery: 45,
    signal: 85,
    mission: 'Resource Detection',
    location: 'Eastern Valley',
  },
  {
    id: 'drone-3',
    name: 'Observer 3',
    status: 'charging',
    battery: 15,
    signal: 100,
    mission: 'None',
    location: 'Base Station',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'charging':
      return 'text-blue-600 bg-blue-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const DroneMonitoring = () => {
  return (
    <div className="space-y-4">
      {drones.map((drone) => (
        <div key={drone.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(drone.status)}`}>
                <Drone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{drone.name}</h3>
                <p className="text-sm text-gray-600">{drone.mission}</p>
              </div>
            </div>
            {drone.status === 'warning' && (
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Battery className="w-4 h-4" />
                Battery
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    drone.battery > 60
                      ? 'bg-green-600'
                      : drone.battery > 20
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  }`}
                  style={{ width: `${drone.battery}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Signal className="w-4 h-4" />
                Signal
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${drone.signal}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Navigation className="w-4 h-4" />
                Location
              </div>
              <p className="text-sm font-medium text-gray-900">{drone.location}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Launch Drone
        </button>
        <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Flight Paths
        </button>
      </div>
    </div>
  );
};