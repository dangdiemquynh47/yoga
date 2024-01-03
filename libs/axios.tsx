import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.CMS_API_URL || "http://45.119.86.109:8001/",
  headers: {
    "Content-Type": "application/json",
    'Cache-Control': 'no-store'
  },
});

axiosInstance.interceptors.response.use(function (response) {
  return response.data;
});
