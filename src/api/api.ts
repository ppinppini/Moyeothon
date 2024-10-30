import axios from 'axios';

const url = import.meta.env.VITE_APP_SERVER_API_URL;

export const api = () => {
  console.log('api 호출');
};

export const apiClient = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
