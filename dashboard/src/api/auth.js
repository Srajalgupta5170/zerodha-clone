import axios from "axios";

const API = axios.create({
  baseURL: (process.env.REACT_APP_API_URL || "http://localhost:3002") + "/api/auth",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => API.post("/login", data);
export const register = (data) => API.post("/register", data);
export const profile = () => API.get("/profile");
