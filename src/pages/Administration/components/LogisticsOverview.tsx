import React from 'react';
import { Truck, Package, Calendar, AlertTriangle } from 'lucide-react';

const shipments = [
  {
    id: 1,
    type: 'Supply Delivery',
    cargo: 'Construction Materials',
    status: 'in_transit',
    eta: '2 days',
    priority: 'high',
  },
  {
    id: 2,
    type: 'Equipment Transfer',
    cargo: 'Scientific Equipment',
    status: 'scheduled',
    eta: '5 days',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'Resource Transport',
    cargo: 'Water and Oxygen',
    status: 'delayed',
    eta: 'Delayed',
    priority: 'critical',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in_transit':
      return 'text-blue-600 bg-blue-100';
    case 'scheduled':
      return 'text-green-600 bg-green-100';
    case 'delayed':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const LogisticsOverview = () => {
  return (
    <div className="space-y-4">
      {/* Quick Actions */}
      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Truck className="w-4 h-4" />
          Schedule Transport
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Package className="w-4 h-4" />
          Track Shipment
        </button>
      </div>

      {/* Shipments List */}
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getStatusColor(shipment.status)}`}>
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{shipment.type}</h3>
                  <p className="text-sm text-gray-600">{shipment.cargo}</p>
                </div>
              </div>
              {shipment.status === 'delayed' && (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                ETA: {shipment.eta}
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  shipment.priority === 'critical'
                    ? 'bg-red-100 text-red-800'
                    : shipment.priority === 'high'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {shipment.priority.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Transport Schedule */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Upcoming Transports</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
            <span className="text-gray-600">Supply Ship Alpha</span>
            <span className="text-gray-900">March 20, 2025</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
            <span className="text-gray-600">Cargo Transport Beta</span>
            <span className="text-gray-900">March 25, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};