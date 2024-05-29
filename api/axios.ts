import axios from "axios";
import interceptor from "./interceptor";

export const useAxiosInstance = (signal?: AbortSignal) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    signal: signal ?? new AbortController().signal,
  });
  interceptor(axiosInstance);
  return axiosInstance;
};
