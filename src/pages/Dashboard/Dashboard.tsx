import React, { useState } from 'react';
import { 
  Users, 
  Battery, 
  Thermometer, 
  Shield, 
  AlertTriangle, 
  Calendar,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { ProjectsList } from './components/ProjectsList';
import { InfrastructureStatus } from './components/InfrastructureStatus';
import { NotificationsList } from './components/NotificationsList';
import { CreateProjectModal } from '../../components/CreateProjectModal';
import { useDashboard } from '../../hooks/useDashboard';

export const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { projects, infrastructure, notifications, isLoading, createProject, markNotificationAsRead } = useDashboard();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Mission Control Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            All Systems Operational
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Lunar Time: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Personnel</p>
              <p className="text-2xl font-bold text-gray-900">24/30</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Battery className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Power Systems</p>
              <p className="text-2xl font-bold text-gray-900">98.5%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Thermometer className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Life Support</p>
              <p className="text-2xl font-bold text-gray-900">Optimal</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Security Status</p>
              <p className="text-2xl font-bold text-gray-900">Protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                New Project
              </button>
            </div>
          </div>
          <div className="p-6">
            <ProjectsList projects={projects} />
          </div>
        </div>

        {/* Infrastructure Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Infrastructure Status</h2>
          </div>
          <div className="p-6">
            <InfrastructureStatus systems={infrastructure} />
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Notifications</h2>
            <button className="text-blue-600 hover:text-blue-800">View All</button>
          </div>
        </div>
        <div className="p-6">
          <NotificationsList 
            notifications={notifications} 
            onMarkAsRead={markNotificationAsRead.mutate} 
          />
        </div>
      </div>

      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={createProject.mutate}
        isLoading={createProject.isPending}
      />
    </div>
  );
};