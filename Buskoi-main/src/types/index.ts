export interface Bus {
  id: string;
  routeNumber: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  occupancy: number;
  maxCapacity: number;
  currentStop: string;
  nextStop: string;
  eta: string;
}

export interface User {
  id: string;
  name: string;
  role: 'student' | 'admin';
  preferredRoutes?: string[];
}

export interface Route {
  id: string;
  number: string;
  stops: string[];
  schedule: {
    stopName: string;
    time: string;
  }[];
}