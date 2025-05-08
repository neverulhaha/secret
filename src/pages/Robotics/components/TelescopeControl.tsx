import React, { useState } from 'react';
import { Telescope, Crosshair, RotateCw, Camera, Download, Eye } from 'lucide-react';

const telescopes = [
  {
    id: 'tel-1',
    name: 'Main Observatory',
    type: 'Radio Telescope',
    status: 'active',
    coordinates: { ra: '18h 23m 45s', dec: '-25° 15\' 30"' },
    target: 'Lunar Maria',
  },
  {
    id: 'tel-2',
    name: 'Survey Telescope',
    type: 'Optical Telescope',
    status: 'standby',
    coordinates: { ra: '20h 41m 12s', dec: '-30° 45\' 22"' },
    target: 'None',
  },
];

export const TelescopeControl = () => {
  const [selectedTelescope, setSelectedTelescope] = useState(telescopes[0].id);

  return (
    <div className="space-y-6">
      {/* Telescope Selection */}
      <div className="flex gap-4">
        {telescopes.map((telescope) => (
          <button
            key={telescope.id}
            className={`flex-1 p-4 border rounded-lg transition-colors ${
              selectedTelescope === telescope.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedTelescope(telescope.id)}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Telescope className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900">{telescope.name}</h3>
                <p className="text-sm text-gray-600">{telescope.type}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Status: {telescope.status}</p>
              <p>Target: {telescope.target}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Telescope Controls */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Right Ascension
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="00h 00m 00s"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Declination
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="00° 00' 00'"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Observation Target
          </label>
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Lunar Maria</option>
            <option>Crater Formations</option>
            <option>Mountain Ranges</option>
            <option>Custom Coordinates</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exposure Time
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seconds"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter
            </label>
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>None</option>
              <option>Infrared</option>
              <option>Ultraviolet</option>
              <option>Visible Light</option>
            </select>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Crosshair className="w-5 h-5" />
            Align Telescope
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Camera className="w-5 h-5" />
            Start Observation
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <RotateCw className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};