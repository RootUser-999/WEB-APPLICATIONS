import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@travelguide.com</p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567</p>
              <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Travel Street, Adventure City</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/trips" className="hover:text-blue-400">Available Trips</a></li>
              <li><a href="/plan-trip" className="hover:text-blue-400">Plan Your Trip</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get travel updates and special offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} TravelGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;