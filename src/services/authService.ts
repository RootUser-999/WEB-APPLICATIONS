import axios from 'axios';
import { User, LoginCredentials } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL;

export const validateToken = async (token: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/api/admin/validate`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const loginUser = async (credentials: LoginCredentials) => {
  const response = await axios.post(`${API_URL}/api/admin/login`, credentials);
  return response.data;
};