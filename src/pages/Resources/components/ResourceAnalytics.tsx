import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const analytics = [
  {
    metric: 'Consumption Rate',
    value: '2.3 units/hour',
    change: '+5%',
    trend: 'up',
    status: 'warning',
  },
  {
    metric: 'Recycling Efficiency',
    value: '94.5%',
    change: '+2%',
    trend: 'up',
    status: 'success',
  },
  {
    metric: 'Resource Loss',
    value: '0.8%',
    change: '-1%',
    trend: 'down',
    status: 'success',
  },
  {
    metric: 'Storage Capacity',
    value: '85%',
    change: '-3%',
    trend: 'down',
    status: 'warning',
  },
];

export const ResourceAnalytics = () => {
  return (
    <div className="space-y-4">
      {analytics.map((item) => (
        <div key={item.metric} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-600">{item.metric}</h4>
            <p className="text-xl font-semibold text-gray-900">{item.value}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span
              className={`flex items-center gap-1 text-sm ${
                item.status === 'success' ? 'text-green-600' : 'text-yellow-600'
              }`}
            >
              {item.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {item.change}
            </span>
            {item.status === 'warning' && (
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};