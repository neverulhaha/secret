import React from 'react';
import { ShieldCheck, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';

const safetyMetrics = [
  {
    category: 'Structural Integrity',
    status: 'optimal',
    score: 98,
    details: 'All structures within safety parameters',
  },
  {
    category: 'Radiation Protection',
    status: 'warning',
    score: 87,
    details: 'Additional shielding recommended for Lab Module 2',
  },
  {
    category: 'Emergency Access',
    status: 'optimal',
    score: 95,
    details: 'All evacuation routes clear',
  },
  {
    category: 'Resource Distribution',
    status: 'critical',
    score: 72,
    details: 'Power distribution needs optimization',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'optimal':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    case 'critical':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'optimal':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'critical':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const SafetyAnalysis = () => {
  return (
    <div className="space-y-4">
      {/* Overall Safety Score */}
      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Overall Safety Score</h3>
            <p className="text-2xl font-bold text-blue-600">88%</p>
          </div>
        </div>
        <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
          View Details
        </button>
      </div>

      {/* Safety Metrics */}
      <div className="space-y-3">
        {safetyMetrics.map((metric) => (
          <div
            key={metric.category}
            className="p-4 border rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(metric.status)}`}>
                {getStatusIcon(metric.status)}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{metric.category}</h4>
                <p className="text-sm text-gray-600">{metric.details}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-gray-900">{metric.score}</span>
              <span className="text-gray-600">%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Safety Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <AlertTriangle className="w-4 h-4 text-yellow-600" />
            Upgrade radiation shielding in Research Lab Module 2
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <AlertTriangle className="w-4 h-4 text-yellow-600" />
            Optimize power distribution network for redundancy
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Maintain current emergency access routes
          </li>
        </ul>
      </div>
    </div>
  );
};