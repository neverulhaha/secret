import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Layers, Move, Grid as Grid3D, Mountain, Eye, Sun } from 'lucide-react';

export const TerrainMap = () => {
  const [activeLayer, setActiveLayer] = useState('terrain');
  const [showGrid, setShowGrid] = useState(true);
  const [zoom, setZoom] = useState(1);

  const layers = [
    { id: 'terrain', name: 'Terrain', icon: Mountain },
    { id: 'elevation', name: 'Elevation', icon: Grid3D },
    { id: 'visibility', name: 'Visibility', icon: Eye },
    { id: 'sunlight', name: 'Solar Exposure', icon: Sun },
  ];

  const handleZoom = (delta: number) => {
    setZoom(Math.max(0.5, Math.min(2, zoom + delta)));
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div 
        className="h-[600px] bg-gray-900 rounded-lg relative overflow-hidden"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
      >
        {/* Sample Terrain Grid */}
        {showGrid && (
          <div className="absolute inset-0 grid grid-cols-24 grid-rows-24 gap-px opacity-20">
            {Array.from({ length: 576 }).map((_, i) => (
              <div key={i} className="border border-gray-500" />
            ))}
          </div>
        )}

        {/* Sample Terrain Features */}
        <div className="absolute inset-0">
          {/* Crater */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-gray-400 bg-gray-800/50" />
          
          {/* Mountain Range */}
          <div className="absolute top-1/2 right-1/3 w-48 h-24 bg-gray-700/50 transform rotate-45" />
          
          {/* Valley */}
          <div className="absolute bottom-1/3 left-1/3 w-64 h-16 bg-gray-600/50 transform -rotate-15" />
        </div>

        {/* Coordinate Markers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white rounded text-sm">
            23.4°N, 15.7°E
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white rounded text-sm">
            Elevation: 2,341m
          </div>
        </div>
      </div>

      {/* Map Controls */}
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
          className={`p-2 rounded-lg shadow transition-colors ${
            showGrid ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setShowGrid(!showGrid)}
        >
          <Grid3D className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <Move className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Layer Controls */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow p-2 space-y-2">
        {layers.map((layer) => (
          <button
            key={layer.id}
            className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors ${
              activeLayer === layer.id
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-50 text-gray-600'
            }`}
            onClick={() => setActiveLayer(layer.id)}
          >
            <layer.icon className="w-4 h-4" />
            <span className="text-sm">{layer.name}</span>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Elevation Scale</h4>
        <div className="flex items-center gap-2">
          <div className="w-32 h-4 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded" />
          <div className="flex justify-between w-full text-xs text-gray-600">
            <span>0m</span>
            <span>5000m</span>
          </div>
        </div>
      </div>
    </div>
  );
};