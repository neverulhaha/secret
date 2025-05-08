import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Building2, Battery, Navigation, Notebook as Robot, Heart, ClipboardList, Shield, BarChart3, Grid as Grid3D } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Site Analysis', icon: Map, path: '/site-analysis' },
  { name: 'Infrastructure', icon: Building2, path: '/infrastructure' },
  { name: 'Module Placement', icon: Grid3D, path: '/module-placement' },
  { name: 'Resources', icon: Battery, path: '/resources' },
  { name: 'Navigation', icon: Navigation, path: '/navigation' },
  { name: 'Robotics', icon: Robot, path: '/robotics' },
  { name: 'Medical', icon: Heart, path: '/medical' },
  { name: 'Administration', icon: ClipboardList, path: '/admin' },
  { name: 'Security', icon: Shield, path: '/security' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
];

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-gray-900 font-bold">LB</span>
        </div>
        <h1 className="text-xl font-bold">Lunar Base</h1>
      </div>
      
      <nav className="space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};