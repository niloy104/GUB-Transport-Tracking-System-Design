import { Bus as BusIcon, Users } from 'lucide-react';
import type { Bus } from '../types';

interface BusCardProps {
  bus: Bus;
  onClick: (bus: Bus) => void;
}

export default function BusCard({ bus, onClick }: BusCardProps) {
  const occupancyPercentage = (bus.occupancy / bus.maxCapacity) * 100;
  
  return (
    <div 
      onClick={() => onClick(bus)}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BusIcon className="h-6 w-6 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Bus {bus.routeNumber}</h3>
        </div>
        <div className="flex items-center">
          <Users className="h-5 w-5 text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">
            {bus.occupancy}/{bus.maxCapacity}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div>
          <p className="text-sm text-gray-500">Current Stop</p>
          <p className="font-medium">{bus.currentStop}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Next Stop</p>
          <p className="font-medium">{bus.nextStop}</p>
          <p className="text-sm text-indigo-600">ETA: {bus.eta}</p>
        </div>
        
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                occupancyPercentage > 80 ? 'bg-red-500' : 
                occupancyPercentage > 50 ? 'bg-yellow-500' : 
                'bg-green-500'
              }`}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Occupancy</p>
        </div>
      </div>
    </div>
  );
}