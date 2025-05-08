import React from 'react';
import { ArrowUpRight, ArrowDownRight, Maximize2, MinusCircle } from 'lucide-react';

const optimizationMetrics = [
  {
    metric: 'Space Utilization',
    current: 85,
    previous: 78,
    unit: '%',
    trend: 'up',
  },
  {
    metric: 'Resource Efficiency',
    current: 92,
    previous: 88,
    unit: '%',
    trend: 'up',
  },
  {
    metric: 'Travel Distance',
    current: 120,
    previous: 150,
    unit: 'm',
    trend: 'down',
  },
  {
    metric: 'Safety Score',
    current: 95,
    previous: 95,
    unit: '%',
    trend: 'neutral',
  },
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <ArrowUpRight className="w-4 h-4 text-green-600" />;
    case 'down':
      return <ArrowDownRight className="w-4 h-4 text-red-600" />;
    case 'neutral':
      return <MinusCircle className="w-4 h-4 text-gray-600" />;
    default:
      return null;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up':
      return 'text-green-600';
    case 'down':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export const OptimizationResults = () => {
  return (
    <div className="space-y-6">
      {/* Optimization Score */}
      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Layout Optimization Score</h3>
          <p className="text-2xl font-bold text-green- 600">94%</p>
        </div>
        <Maximize2 className="w-6 h-6 text-green-600" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {optimizationMetrics.map((item) => (
          <div key={item.metric} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{item.metric}</span>
              {getTrendIcon(item.trend)}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {item.current}
                {item.unit}
              </span>
              <span className={`text-sm ${getTrendColor(item.trend)}`}>
                {item.trend === 'up' && '+'}
                {((item.current - item.previous) / item.previous * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Optimization Details */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Optimization Details</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Proximity Score</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }} />
              </div>
              <span className="text-gray-900 font-medium">88%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Resource Distribution</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="text-gray-900 font-medium">92%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Safety Compliance</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }} />
              </div>
              <span className="text-gray-900 font-medium">95%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Apply Optimization
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Recalculate
        </button>
      </div>
    </div>
  );
};