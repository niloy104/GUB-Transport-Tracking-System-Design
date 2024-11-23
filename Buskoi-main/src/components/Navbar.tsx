import { Menu, X, Bus, Bell, Map, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Bus className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/track" className="text-indigo-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Track Bus</a>
                <a href="/routes" className="text-indigo-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Routes</a>
                <a href="/notifications" className="text-indigo-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notifications</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-indigo-100 hover:text-white focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
              <button className="ml-3 p-1 rounded-full text-indigo-100 hover:text-white focus:outline-none">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/track" className="text-indigo-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Track Bus</a>
            <a href="/routes" className="text-indigo-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Routes</a>
            <a href="/notifications" className="text-indigo-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Notifications</a>
          </div>
        </div>
      )}
    </nav>
  );
}