import axios from 'axios';
import Cookies from 'js-cookie';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  withCredentials: true, // ✅ This is the correct place
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token if present
httpClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = Cookies.get('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Handle 401 errors
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== 'undefined' && error.response?.status === 401) {
      Cookies.remove('accessToken');
      // Optionally redirect
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default httpClient;
