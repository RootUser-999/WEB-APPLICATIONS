import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface TripCardProps {
  trip: {
    _id: string;
    title: string;
    description: string;
    destination: string;
    duration: number;
    price: number;
    startDate: string;
    maxParticipants: number;
    currentParticipants: number;
    imageUrl: string;
  };
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={trip.imageUrl}
        alt={trip.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{trip.destination}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{trip.duration} days</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(trip.startDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span>{trip.currentParticipants}/{trip.maxParticipants} spots filled</span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{trip.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${trip.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;