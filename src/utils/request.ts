import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from 'axios';

const Request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.error('request', config);
  return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error('error', error);
  return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log('response', response);
  return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.log(' Response error', error);
  return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

