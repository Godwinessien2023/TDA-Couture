import axios from "axios";

const API_BASE_URL = "http://localhost:5000";
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
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
