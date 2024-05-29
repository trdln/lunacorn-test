import { AxiosError, type AxiosInstance } from 'axios';

export default function (axios: AxiosInstance) {
  axios.interceptors.request.use(
    (request) => {
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
}
