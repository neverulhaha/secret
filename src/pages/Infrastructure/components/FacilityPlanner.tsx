import React, { useState } from 'react';
import {
  Home,
  Rocket,
  FlaskRound as Flask,
  Battery,
  Building2,
  Warehouse,
  Ruler,
  Thermometer,
  Shield,
} from 'lucide-react';

const facilityTypes = [
  {
    id: 'habitat',
    name: 'Habitat Module',
    icon: Home,
    color: 'text-blue-600 bg-blue-100',
    description: 'Living quarters and life support systems',
    minArea: 100,
    maxArea: 500,
    requirements: ['Radiation shielding', 'Life support', 'Emergency exits'],
  },
  {
    id: 'landing',
    name: 'Landing Zone',
    icon: Rocket,
    color: 'text-purple-600 bg-purple-100',
    description: 'Spacecraft landing and launch facilities',
    minArea: 1000,
    maxArea: 2000,
    requirements: [
      'Clear approach path',
      'Reinforced surface',
      'Safety perimeter',
    ],
  },
  {
    id: 'research',
    name: 'Research Lab',
    icon: Flask,
    color: 'text-green-600 bg-green-100',
    description: 'Scientific research facilities',
    minArea: 200,
    maxArea: 800,
    requirements: ['Stable environment', 'Power backup', 'Containment systems'],
  },
  {
    id: 'power',
    name: 'Power Station',
    icon: Battery,
    color: 'text-yellow-600 bg-yellow-100',
    description: 'Energy generation and storage',
    minArea: 300,
    maxArea: 1000,
    requirements: ['Cooling systems', 'Safety zones', 'Distribution grid'],
  },
  {
    id: 'storage',
    name: 'Storage Facility',
    icon: Warehouse,
    color: 'text-orange-600 bg-orange-100',
    description: 'Resource and equipment storage',
    minArea: 150,
    maxArea: 600,
    requirements: ['Climate control', 'Access control', 'Inventory systems'],
  },
];

export const FacilityPlanner = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({
    width: '',
    length: '',
    height: '',
  });
  const [constructionType, setConstructionType] = useState('inflatable');
  const [showRequirements, setShowRequirements] = useState(false);

  const calculateArea = () => {
    if (dimensions.width && dimensions.length) {
      return parseFloat(dimensions.width) * parseFloat(dimensions.length);
    }
    return 0;
  };

  const selectedFacilityData = facilityTypes.find(
    (f) => f.id === selectedFacility
  );
  const area = calculateArea();
  const isAreaValid = selectedFacilityData
    ? area >= selectedFacilityData.minArea &&
      area <= selectedFacilityData.maxArea
    : true;

  return (
    <div className="space-y-6">
      {/* Facility Type Selection */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">
          Select Facility Type
        </h3>
        <div className="space-y-2">
          {facilityTypes.map((facility) => (
            <div
              key={facility.id}
              className={`flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                selectedFacility === facility.id
                  ? 'border-blue-500 bg-blue-50'
                  : ''
              }`}
              onClick={() => {
                setSelectedFacility(facility.id);
                setShowRequirements(true);
              }}
            >
              <div className={`p-2 rounded-lg ${facility.color}`}>
                <facility.icon className="w-5 h-5" />
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  {facility.name}
                </h4>
                <p className="text-xs text-gray-500">{facility.description}</p>
              </div>
              <div className="text-xs text-gray-500">
                {facility.minArea}-{facility.maxArea} m²
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Parameters */}
      {selectedFacility && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Facility Parameters
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dimensions
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="relative">
                    <input
                      type="number"
                      value={dimensions.width}
                      onChange={(e) =>
                        setDimensions((prev) => ({
                          ...prev,
                          width: e.target.value,
                        }))
                      }
                      placeholder="Width"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      m
                    </span>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="number"
                      value={dimensions.length}
                      onChange={(e) =>
                        setDimensions((prev) => ({
                          ...prev,
                          length: e.target.value,
                        }))
                      }
                      placeholder="Length"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      m
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={dimensions.height}
                  onChange={(e) =>
                    setDimensions((prev) => ({
                      ...prev,
                      height: e.target.value,
                    }))
                  }
                  placeholder="Height"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                />
                <span className="absolute right-3 top-2 text-gray-500">m</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Construction Type
              </label>
              <select
                value={constructionType}
                onChange={(e) => setConstructionType(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="inflatable">Inflatable Structure</option>
                <option value="rigid">Rigid Module</option>
                <option value="underground">Underground Facility</option>
                <option value="surface">Surface Building</option>
              </select>
            </div>

            {/* Area Calculation */}
            <div
              className={`p-4 rounded-lg ${
                isAreaValid ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Ruler
                  className={`w-5 h-5 ${
                    isAreaValid ? 'text-green-600' : 'text-red-600'
                  }`}
                />
                <span className="text-sm font-medium">
                  Total Area: {area} m²
                </span>
              </div>
              {!isAreaValid && selectedFacilityData && (
                <p className="text-sm text-red-600 mt-1">
                  Area must be between {selectedFacilityData.minArea} and{' '}
                  {selectedFacilityData.maxArea} m²
                </p>
              )}
            </div>

            {/* Facility Requirements */}
            {showRequirements && selectedFacilityData && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-600" />
                  Facility Requirements
                </h4>
                <ul className="space-y-2">
                  {selectedFacilityData.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Environmental Conditions */}
      {selectedFacility && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-gray-600" />
            Environmental Controls
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Temperature
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Standard (20-22°C)</option>
                <option>Cold Storage (2-8°C)</option>
                <option>Equipment Room (18-25°C)</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pressure
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Earth Standard (1 atm)</option>
                <option>Low Pressure (0.8 atm)</option>
                <option>Custom Setting</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors ${
            selectedFacility && isAreaValid
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedFacility || !isAreaValid}
        >
          Calculate Placement
        </button>
        <button
          onClick={() => {
            setSelectedFacility(null);
            setDimensions({ width: '', length: '', height: '' });
            setConstructionType('inflatable');
            setShowRequirements(false);
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
