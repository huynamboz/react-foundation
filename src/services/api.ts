import axios from 'axios';

const api = axios.create({
  baseURL: 'https://658c0196859b3491d3f54467.mockapi.io',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;