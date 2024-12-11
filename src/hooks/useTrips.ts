import { useState, useEffect } from 'react';
import axios from 'axios';

interface Trip {
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
}

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/trips`);
        setTrips(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch trips. Please try again later.');
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return { trips, loading, error };
};