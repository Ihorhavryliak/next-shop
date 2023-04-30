import axios from "axios";

const API_URL = "https://servershop-production.up.railway.app/";
const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default api;
