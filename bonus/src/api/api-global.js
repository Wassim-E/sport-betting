import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DJANGO_API_URL,
});

// Interceptor for request: attach the token if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor for response: handle invalid token error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check for authentication errors from the server response
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authToken');
    }

    return Promise.reject(error);
  }
);

const handleNetworkError = (error) => {
  console.error('Network error:', error);
};

// Wrapper function for API calls with standardized error handling
export const handleAPIError = async (apiCall) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    handleNetworkError(error);
    return [];
  }
};

export default api;