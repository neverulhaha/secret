import React from 'react';
import { AlertTriangle, CheckCircle2, Info, Shield, PenTool as Tool, Users, Battery, Droplets } from 'lucide-react';
import type { Notification } from '../../../types/dashboard';

interface NotificationsListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'alert':
      return AlertTriangle;
    case 'success':
      return CheckCircle2;
    case 'info':
      return Info;
    case 'warning':
      return Tool;
    case 'security':
      return Shield;
    default:
      return Info;
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case 'alert':
      return 'text-red-600 bg-red-100';
    case 'success':
      return 'text-green-600 bg-green-100';
    case 'info':
      return 'text-blue-600 bg-blue-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'security':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const NotificationsList: React.FC<NotificationsListProps> = ({ notifications, onMarkAsRead }) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => {
        const Icon = getIcon(notification.type);
        return (
          <div 
            key={notification.id} 
            className={`flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 ${
              notification.is_read ? 'opacity-75' : ''
            }`}
            onClick={() => !notification.is_read && onMarkAsRead(notification.id)}
          >
            <div className={`p-2 rounded-lg ${getIconColor(notification.type)}`}>
              <Icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{notification.title}</h4>
                <span className="text-sm text-gray-500">{notification.timestamp}</span>
              </div>
              <p className="text-gray-600 mt-1">{notification.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};