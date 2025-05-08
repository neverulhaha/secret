import { useState } from 'react';
import type { Project, InfrastructureSystem, Notification } from '../types/dashboard';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'New Habitat Module Construction',
    status: 'in_progress',
    progress: 65,
    due_date: '2025-04-15',
    project_members: [
      { user_id: '1', role: 'owner' },
      { user_id: '2', role: 'member' }
    ]
  },
  {
    id: '2',
    name: 'Solar Panel Array Expansion',
    status: 'completed',
    progress: 100,
    due_date: '2025-03-30',
    project_members: [
      { user_id: '1', role: 'owner' }
    ]
  }
];

const mockInfrastructure: InfrastructureSystem[] = [
  {
    id: '1',
    system_name: 'Habitat Modules',
    status: 'optimal',
    details: 'All 6 modules operational',
    metrics: {
      pressure: '101.3 kPa',
      temperature: '21°C',
      humidity: '45%'
    },
    last_updated: new Date().toISOString()
  },
  {
    id: '2',
    system_name: 'Power Systems',
    status: 'warning',
    details: 'Solar array 3 efficiency at 92%',
    metrics: {
      output: '450 kW',
      consumption: '380 kW',
      storage: '85%'
    },
    last_updated: new Date().toISOString()
  }
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Power System Warning',
    message: 'Solar array efficiency below optimal levels',
    created_at: new Date().toISOString(),
    is_read: false,
    user_id: '1',
    timestamp: '5 minutes ago'
  },
  {
    id: '2',
    type: 'success',
    title: 'Maintenance Complete',
    message: 'Habitat module maintenance completed successfully',
    created_at: new Date().toISOString(),
    is_read: false,
    user_id: '1',
    timestamp: '10 minutes ago'
  }
];

export const useDashboard = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [infrastructure] = useState<InfrastructureSystem[]>(mockInfrastructure);
  const [notifications] = useState<Notification[]>(mockNotifications);
  const [isLoading] = useState(false);

  const createProject = async () => {
    // Mock implementation
  };

  const markNotificationAsRead = async () => {
    // Mock implementation
  };

  return {
    projects,
    infrastructure,
    notifications,
    isLoading,
    createProject: { mutate: createProject, isPending: false },
    markNotificationAsRead: { mutate: markNotificationAsRead }
  };
};