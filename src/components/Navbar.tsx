import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">TravelGuide</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/trips" className="text-gray-600 hover:text-blue-600">Available Trips</Link>
            <Link to="/plan-trip" className="text-gray-600 hover:text-blue-600">Plan Your Trip</Link>
            <Link to="/admin/login" className="text-gray-600 hover:text-blue-600">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;