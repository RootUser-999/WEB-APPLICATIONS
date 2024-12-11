import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt="Travel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">Explore the world with our expert-guided tours</p>
            <Link
              to="/trips"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Available Trips
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
            <p className="text-gray-600">Knowledgeable guides who know the best spots</p>
          </div>
          <div className="text-center p-6">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Planning</h3>
            <p className="text-gray-600">Customize your trip according to your preferences</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
            <p className="text-gray-600">Intimate experiences with like-minded travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;