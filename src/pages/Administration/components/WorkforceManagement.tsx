import React from 'react';
import { Users, Clock, BarChart as ChartBar, AlertTriangle } from 'lucide-react';

const departments = [
  {
    name: 'Engineering',
    personnel: 28,
    shifts: 3,
    utilization: 92,
    status: 'optimal',
  },
  {
    name: 'Research',
    personnel: 15,
    shifts: 2,
    utilization: 87,
    status: 'warning',
  },
  {
    name: 'Operations',
    personnel: 22,
    shifts: 3,
    utilization: 95,
    status: 'optimal',
  },
  {
    name: 'Maintenance',
    personnel: 19,
    shifts: 2,
    utilization: 78,
    status: 'warning',
  },
];

export const WorkforceManagement = () => {
  return (
    <div className="space-y-6">
      {/* Department Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((dept) => (
          <div key={dept.name} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  dept.status === 'optimal' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <Users className={`w-5 h-5 ${
                    dept.status === 'optimal' ? 'text-green-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{dept.name}</h3>
                  <p className="text-sm text-gray-600">{dept.personnel} Personnel</p>
                </div>
              </div>
              {dept.status === 'warning' && (
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              )}
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Utilization</span>
                  <span className="font-medium text-gray-900">{dept.utilization}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      dept.utilization > 90
                        ? 'bg-green-600'
                        : dept.utilization > 75
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                    style={{ width: `${dept.utilization}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Active Shifts</span>
                </div>
                <span className="font-medium text-gray-900">{dept.shifts}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Productivity Metrics */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <ChartBar className="w-5 h-5 text-blue-600" />
          <h3 className="font-medium text-gray-900">Productivity Overview</h3>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Overall Efficiency</span>
              <span className="font-medium text-gray-900">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="w-[88%] h-2 rounded-full bg-blue-600" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Task Completion Rate</span>
              <span className="font-medium text-gray-900">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="w-[92%] h-2 rounded-full bg-green-600" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Resource Utilization</span>
              <span className="font-medium text-gray-900">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="w-[85%] h-2 rounded-full bg-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Schedule Shifts
        </button>
        <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Reports
        </button>
      </div>
    </div>
  );
};