import React from 'react';
import { Settings, AlertTriangle } from 'lucide-react';

const resourceTypes = [
  { id: 'water', name: 'Water' },
  { id: 'oxygen', name: 'Oxygen' },
  { id: 'power', name: 'Power' },
  { id: 'hydrogen', name: 'Hydrogen' },
];

const facilities = [
  { id: 'habitat', name: 'Habitat Modules' },
  { id: 'research', name: 'Research Labs' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'storage', name: 'Storage Facilities' },
];

export const ResourceAllocation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="font-medium">Resource Allocation Controls</span>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Facility
              </th>
              {resourceTypes.map((resource) => (
                <th
                  key={resource.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {resource.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {facilities.map((facility) => (
              <tr key={facility.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {facility.name}
                </td>
                {resourceTypes.map((resource) => (
                  <td key={resource.id} className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        className="w-20 px-2 py-1 border rounded"
                        defaultValue="25"
                      />
                      <span className="text-sm text-gray-600">%</span>
                      {resource.id === 'oxygen' && facility.id === 'habitat' && (
                        <AlertTriangle className="w-4 h-4 text-yellow-600" title="Near capacity" />
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};