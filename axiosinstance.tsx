/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://chat-app-backend-rohitmeerwals-projects.vercel.app/api',
  withCredentials: true,
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
