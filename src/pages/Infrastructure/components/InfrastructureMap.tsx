import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Layers, Move, Grid, Ruler, Home, Rocket, FlaskRound as Flask, Battery, Building2 } from 'lucide-react';

interface Facility {
  id: string;
  type: string;
  name: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}

const initialFacilities: Facility[] = [
  {
    id: '1',
    type: 'habitat',
    name: 'Habitat Complex A',
    position: { x: 25, y: 25 },
    size: { width: 40, height: 32 },
    color: 'blue'
  },
  {
    id: '2',
    type: 'research',
    name: 'Research Lab',
    position: { x: 50, y: 50 },
    size: { width: 32, height: 32 },
    color: 'green'
  },
  {
    id: '3',
    type: 'landing',
    name: 'Landing Zone',
    position: { x: 75, y: 75 },
    size: { width: 48, height: 24 },
    color: 'purple'
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'habitat':
      return Home;
    case 'landing':
      return Rocket;
    case 'research':
      return Flask;
    case 'power':
      return Battery;
    default:
      return Building2;
  }
};

export const InfrastructureMap = () => {
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [facilities] = useState<Facility[]>(initialFacilities);

  const handleZoom = (delta: number) => {
    const newZoom = Math.max(0.5, Math.min(2, zoom + delta));
    setZoom(newZoom);
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div 
        className="h-[600px] bg-gray-100 rounded-lg relative overflow-hidden border-2 border-dashed border-gray-300"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
      >
        {/* Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px opacity-20">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-400" />
            ))}
          </div>
        )}

        {/* Facilities */}
        {facilities.map((facility) => {
          const Icon = getIconForType(facility.type);
          return (
            <div
              key={facility.id}
              className={`absolute border-2 rounded-lg transition-all cursor-pointer ${
                selectedFacility === facility.id
                  ? 'ring-2 ring-offset-2 ring-blue-500'
                  : ''
              }`}
              style={{
                top: `${facility.position.y}%`,
                left: `${facility.position.x}%`,
                width: `${facility.size.width}%`,
                height: `${facility.size.height}%`,
                borderColor: `var(--tw-color-${facility.color}-500)`,
                backgroundColor: `var(--tw-color-${facility.color}-500/20)`
              }}
              onClick={() => setSelectedFacility(facility.id)}
            >
              <div className="absolute -top-6 left-0 bg-white px-2 py-1 rounded shadow-sm flex items-center gap-2">
                <Icon className={`w-4 h-4 text-${facility.color}-600`} />
                <span className="text-sm font-medium">{facility.name}</span>
              </div>

              {showMeasurements && (
                <>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs">
                    {facility.size.width}m × {facility.size.height}m
                  </div>
                  {selectedFacility === facility.id && (
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs">
                      Area: {facility.size.width * facility.size.height}m²
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}

        {/* Connection Lines */}
        <svg className="absolute inset-0 pointer-events-none">
          {facilities.map((facility, index) => {
            if (index === facilities.length - 1) return null;
            const next = facilities[index + 1];
            return (
              <path
                key={`${facility.id}-${next.id}`}
                d={`M${facility.position.x + facility.size.width/2},${facility.position.y + facility.size.height/2} 
                   L${next.position.x + next.size.width/2},${next.position.y + next.size.height/2}`}
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4,4"
              />
            );
          })}
        </svg>
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
          <Grid className="w-5 h-5" />
        </button>
        <button 
          className={`p-2 rounded-lg shadow transition-colors ${
            showMeasurements ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setShowMeasurements(!showMeasurements)}
        >
          <Ruler className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <Layers className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <Move className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Selected Facility Info */}
      {selectedFacility && (
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
          <h4 className="font-medium text-gray-900 mb-2">Selected Facility</h4>
          {facilities.map(facility => {
            if (facility.id === selectedFacility) {
              const Icon = getIconForType(facility.type);
              return (
                <div key={facility.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 text-${facility.color}-600`} />
                    <span className="text-sm">{facility.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Position: {facility.position.x}%, {facility.position.y}%</div>
                    <div>Size: {facility.size.width}m × {facility.size.height}m</div>
                    <div>Area: {facility.size.width * facility.size.height}m²</div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};