import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Grid as Grid3D, Layers } from 'lucide-react';

export const ModuleGrid = () => {
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [rotation, setRotation] = useState(0);

  const handleZoom = (delta: number) => {
    setZoom(Math.max(0.5, Math.min(2, zoom + delta)));
  };

  const handleRotation = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="relative">
      {/* Grid Container */}
      <div 
        className="h-[600px] bg-gray-100 rounded-lg relative overflow-hidden border-2 border-dashed border-gray-300"
        style={{ 
          transform: `scale(${zoom}) rotate(${rotation}deg)`,
          transformOrigin: 'center'
        }}
      >
        {/* Grid Lines */}
        {showGrid && (
          <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-px">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-gray-300 hover:bg-blue-100/50 transition-colors" />
            ))}
          </div>
        )}

        {/* Sample Placed Modules */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 border-2 border-blue-500 rounded-lg">
          <div className="absolute -top-6 left-0 bg-white px-2 py-1 rounded shadow-sm text-sm">
            Habitat Module A
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500/20 border-2 border-green-500 rounded-lg">
          <div className="absolute -top-6 left-0 bg-white px-2 py-1 rounded shadow-sm text-sm">
            Research Lab
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 pointer-events-none">
          <path
            d="M160,160 L240,240"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button 
          className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
          onClick={() => handleZoom(0.1)}
        >
          <ZoomIn className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
          onClick={() => handleZoom(-0.1)}
        >
          <ZoomOut className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
          onClick={handleRotation}
        >
          <RotateCw className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          className={`p-2 rounded-lg shadow transition-colors ${
            showGrid ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setShowGrid(!showGrid)}
        >
          <Grid3D className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <Layers className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Grid Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Grid Scale</h4>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-gray-300 rounded" />
          <span className="text-sm text-gray-600">= 5m²</span>
        </div>
      </div>
    </div>
  );
};