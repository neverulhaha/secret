import React from 'react';
import { Lightbulb, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

const suggestions = [
  {
    id: 1,
    category: 'Resource Management',
    title: 'Optimize Water Recycling System',
    description: 'Implement advanced filtration to improve recycling efficiency by 5%',
    impact: 'High',
    timeframe: 'Medium-term',
    status: 'pending',
    metrics: {
      resourceSaving: '15%',
      efficiencyGain: '8%',
      implementation: '3 months',
    },
  },
  {
    id: 2,
    category: 'Power Distribution',
    title: 'Solar Array Realignment',
    description: 'Adjust solar panel angles for optimal energy capture',
    impact: 'Medium',
    timeframe: 'Short-term',
    status: 'in_progress',
    metrics: {
      resourceSaving: '10%',
      efficiencyGain: '12%',
      implementation: '2 weeks',
    },
  },
  {
    id: 3,
    category: 'Space Utilization',
    title: 'Storage Area Reorganization',
    description: 'Implement vertical storage solutions to increase capacity',
    impact: 'Medium',
    timeframe: 'Short-term',
    status: 'completed',
    metrics: {
      resourceSaving: '25%',
      efficiencyGain: '15%',
      implementation: '1 month',
    },
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-600 bg-green-100';
    case 'in_progress':
      return 'text-blue-600 bg-blue-100';
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'in_progress':
      return <Clock className="w-5 h-5 text-blue-600" />;
    case 'pending':
      return <Clock className="w-5 h-5 text-yellow-600" />;
    default:
      return null;
  }
};

export const OptimizationSuggestions = () => {
  return (
    <div className="space-y-6">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(suggestion.status)}`}>
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{suggestion.title}</h3>
                <p className="text-sm text-gray-600">{suggestion.category}</p>
              </div>
            </div>
            {getStatusIcon(suggestion.status)}
          </div>

          <p className="text-sm text-gray-600 mb-4">{suggestion.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Resource Saving</p>
              <p className="font-medium text-gray-900">{suggestion.metrics.resourceSaving}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Efficiency Gain</p>
              <p className="font-medium text-gray-900">{suggestion.metrics.efficiencyGain}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Implementation</p>
              <p className="font-medium text-gray-900">{suggestion.metrics.implementation}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                suggestion.impact === 'High'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {suggestion.impact} Impact
              </span>
              <span className="text-sm text-gray-600">{suggestion.timeframe}</span>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <span className="text-sm">View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};