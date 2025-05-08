import React from 'react';
import { Calendar, MoreVertical, CheckCircle2, Clock, XCircle } from 'lucide-react';
import type { Project } from '../../../types/dashboard';
import { format } from 'date-fns';

interface ProjectsListProps {
  projects: Project[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'in_progress':
      return <Clock className="w-5 h-5 text-blue-600" />;
    case 'delayed':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in_progress':
      return 'bg-blue-100 text-blue-800';
    case 'delayed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No projects found. Create a new project to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {getStatusIcon(project.status)}
              <h3 className="font-medium text-gray-900">{project.name}</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Due {format(new Date(project.due_date), 'MMM dd, yyyy')}
              </span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          {project.project_members && (
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.project_members.map((member, index) => (
                  <div
                    key={member.user_id}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {member.user_id.slice(0, 2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};