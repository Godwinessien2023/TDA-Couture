import axios from "axios";

const API_BASE_URL = "https://legendary-space-halibut-r4g4gv94qgxvc5xg7-5000.app.github.dev/api/v1";
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
    const response = await api.post("/user/login", JSON.stringify(data));
    return response.data;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Function to handle signup
export const signupApi = async (data) => {
  try {
    const response = await api.post("/users/add", JSON.stringify(data));
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data ||
      error.message ||
      "An error occurred during signup.";
    console.error("Signup API error:", errorMessage);
    throw new errorMessage();
  }
};
