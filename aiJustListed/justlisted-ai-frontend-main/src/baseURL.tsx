import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const token: string | null = localStorage.getItem('token');


const baseUrl: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    authorization: `Bearer ${token || ''}`,
  },
});

baseUrl.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default baseUrl;
