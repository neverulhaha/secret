import React from 'react';
import { Calendar, Download, Eye, MoreVertical } from 'lucide-react';

const analysisHistory = [
  {
    id: 1,
    date: '2025-03-15',
    location: '23.4°N, 15.7°E',
    type: 'Comprehensive',
    status: 'completed',
    findings: 'High resource potential, moderate hazards',
  },
  {
    id: 2,
    date: '2025-03-14',
    location: '22.8°N, 16.2°E',
    type: 'Quick Scan',
    status: 'completed',
    findings: 'Unsuitable terrain conditions',
  },
  {
    id: 3,
    date: '2025-03-13',
    location: '23.1°N, 15.9°E',
    type: 'Resource Focus',
    status: 'completed',
    findings: 'High water ice concentration detected',
  },
  {
    id: 4,
    date: '2025-03-12',
    location: '23.6°N, 15.4°E',
    type: 'Hazard Assessment',
    status: 'completed',
    findings: 'Multiple terrain hazards identified',
  },
];

export const AnalysisHistory = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Analysis Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Key Findings
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {analysisHistory.map((analysis) => (
            <tr key={analysis.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {analysis.date}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {analysis.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {analysis.type}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {analysis.findings}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};