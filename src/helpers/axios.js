import axiosDefault from "axios";

export const axios = axiosDefault.create({
  baseURL: "https://pf-backend-production-883c.up.railway.app/api",
});

export const cloudinary = axiosDefault.create({
  baseURL: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}`,
});
