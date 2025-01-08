import axios from "axios";

const API_BASE_URL = 'https://dummyjson.com/auth/login';
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json/"
  },
});

export const loginApi = async (data) => {
  try {
    const response = await api.post("aogin", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('/auth/login', {
      email,
      password,
    });
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const Signup = async (data) => {
  try {
    const response = await api.post("/signup", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default api;