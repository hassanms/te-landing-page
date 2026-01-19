import axios, { AxiosInstance } from "axios";
import { getAccessToken } from "lib/supabase/auth-client";

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use(
  async (config) => {
    // Only add token on client-side
    if (typeof window !== "undefined") {
      const token = await getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
