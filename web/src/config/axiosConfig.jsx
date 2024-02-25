// axios config
import axios from "axios";

const API_URL = "http://localhost:8080";

const axiosConfig = axios.create({
  baseURL: API_URL,
});

export default axiosConfig;
