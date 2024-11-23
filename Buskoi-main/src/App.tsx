import React from 'react';
import Navbar from './components/Navbar';
import BusCard from './components/BusCard';
import { MapPin, AlertCircle } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const mockBus = {
  id: '1',
  routeNumber: 'R1',
  currentLocation: { lat: 40.7128, lng: -74.0060 },
  occupancy: 25,
  maxCapacity: 40,
  currentStop: 'Main Campus',
  nextStop: 'Engineering Building',
  eta: '5 mins'
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-indigo-600 h-[40vh]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="College campus"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            College Bus Tracker
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Track your college bus in real-time, check routes, and receive notifications when your bus is nearby.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Active Buses</h3>
                <p className="text-3xl font-bold text-indigo-600">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Alerts</h3>
                <p className="text-3xl font-bold text-yellow-500">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BusCard 
            bus={mockBus} 
            onClick={(bus) => console.log('Bus clicked:', bus)} 
          />
          {/* Add more BusCard components here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/track" className="text-gray-300 hover:text-white">Track Bus</a></li>
                <li><a href="/routes" className="text-gray-300 hover:text-white">Routes & Schedules</a></li>
                <li><a href="/notifications" className="text-gray-300 hover:text-white">Notifications</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/help" className="text-gray-300 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center">© 2024 College Bus Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;