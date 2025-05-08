export interface ProjectMember {
  user_id: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'in_progress' | 'completed' | 'delayed';
  progress: number;
  due_date: string;
  created_at?: string;
  updated_at?: string;
  project_members?: ProjectMember[];
}

export interface InfrastructureSystem {
  id: string;
  system_name: string;
  status: 'optimal' | 'warning' | 'error';
  details: string;
  metrics: Record<string, string>;
  last_updated: string;
}

export interface Notification {
  id: string;
  type: 'alert' | 'success' | 'info' | 'warning' | 'security';
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
  user_id: string;
  timestamp?: string;
}

export interface CreateProjectInput {
  name: string;
  due_date: string;
}