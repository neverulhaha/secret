import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <div className="text-xl font-semibold text-gray-800">
          Lunar Base Management System
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user?.name}</span>
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};