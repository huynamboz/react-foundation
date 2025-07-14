import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://658c0196859b3491d3f54467.mockapi.io',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;