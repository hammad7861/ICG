import useAuthStore from "../../store/auth";
import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_TARGETED_URL,
});

newRequest.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default newRequest;
