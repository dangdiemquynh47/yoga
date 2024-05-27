import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.CMS_API_URL || "https://cms.malayoga.vn",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});

axiosInstance.interceptors.response.use(function (response) {
  return response.data;
});

export const CMS_ENV = process.env.CMS_API_URL || "https://cms.malayoga.vn";

export const axiosClient = axios.create({
  baseURL: CMS_ENV,
  headers: {
    "Content-Type": "application/json",
  },
});

