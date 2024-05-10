import axiosDefault from "axios";

export const axios = axiosDefault.create({
  baseURL: "https://2bldqjc8-3001.brs.devtunnels.ms/api",
});

export const cloudinary = axiosDefault.create({
  baseURL: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}`,
});
