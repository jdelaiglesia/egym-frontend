import axiosDefault from "axios";

export const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

export const cloudinary = axiosDefault.create({
  baseURL: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}`,
});
