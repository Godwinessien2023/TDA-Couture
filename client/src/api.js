import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";
/**
 * Axios instance configured with base URL and default headers.
 * 
 * @constant {AxiosInstance} api - The Axios instance for making HTTP requests.
 * @property {string} baseURL - The base URL for the API.
 * @property {number} timeout - The request timeout in milliseconds.
 * @property {Object} headers - The default headers for the requests.
 * @property {string} headers.Content-Type - The content type for the requests, set to "application/json".
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export const loginApi = async (data) => {
  try {
    const response = await api.post("/auth/login", JSON.stringify(data)); 
    return response.data;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Function to handle signup
export const signupApi = async (data) => {
  try {
    const response = await api.post("/auth/signup", JSON.stringify(data));
    return response.data;
  } catch (error) {
    console.error("Signup API error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};