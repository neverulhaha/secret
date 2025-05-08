import React from 'react';
import { Compass, ZoomIn, ZoomOut, Layers } from 'lucide-react';

export const BaseMap = () => {
  return (
    <div className="relative">
      {/* Map Container */}
      <div className="h-[600px] bg-gray-900 rounded-lg relative overflow-hidden">
        {/* Sample Map Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-500" />
          ))}
        </div>

        {/* Sample Facilities */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-500 rounded-lg bg-blue-500/20">
          <span className="absolute -top-6 left-0 text-white text-sm">Habitat Complex</span>
        </div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-green-500 rounded-lg bg-green-500/20">
          <span className="absolute -top-6 left-0 text-white text-sm">Research Lab</span>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border-2 border-purple-500 rounded-lg bg-purple-500/20">
          <span className="absolute -top-6 left-0 text-white text-sm">Landing Zone</span>
        </div>

        {/* Active Routes */}
        <div className="absolute inset-0">
          <svg className="w-full h-full">
            <path
              d="M300,200 L400,300 L500,400"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M200,400 L300,350 L400,450"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50">
          <ZoomIn className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50">
          <ZoomOut className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50">
          <Layers className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Compass */}
      <div className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow">
        <Compass className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
};