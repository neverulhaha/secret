import React from 'react';
import { User, Truck, Notebook as Robot, AlertTriangle } from 'lucide-react';

const movements = [
  {
    id: 1,
    type: 'personnel',
    name: 'EVA Team Alpha',
    icon: User,
    from: 'Habitat Module 1',
    to: 'Research Lab',
    eta: '5 min',
    status: 'active',
  },
  {
    id: 2,
    type: 'vehicle',
    name: 'Cargo Transport 2',
    icon: Truck,
    from: 'Landing Zone',
    to: 'Storage Facility',
    eta: '12 min',
    status: 'warning',
  },
  {
    id: 3,
    type: 'robot',
    name: 'Maintenance Bot 5',
    icon: Robot,
    from: 'Power Station',
    to: 'Solar Array',
    eta: '8 min',
    status: 'active',
  },
];

export const MovementTracking = () => {
  return (
    <div className="space-y-4">
      {movements.map((movement) => (
        <div
          key={movement.id}
          className={`p-4 rounded-lg border ${
            movement.status === 'warning' ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`p-2 rounded-lg ${
                movement.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
              }`}
            >
              <movement.icon
                className={`w-5 h-5 ${
                  movement.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`}
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{movement.name}</h3>
              <p className="text-sm text-gray-600">ETA: {movement.eta}</p>
            </div>
            {movement.status === 'warning' && (
              <AlertTriangle className="w-5 h-5 text-yellow-600 ml-auto" />
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{movement.from}</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16">
              <path
                d="M1 8h14M9 3l6 5-6 5"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{movement.to}</span>
          </div>
        </div>
      ))}
    </div>
  );
};