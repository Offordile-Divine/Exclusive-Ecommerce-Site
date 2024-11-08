import axios from "axios";

const api = axios.create({
  baseURL: "https://one00daysofcoding.onrender.com/",
  withCredentials: true,
});

export default api;
