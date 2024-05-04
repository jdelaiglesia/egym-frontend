import axiosDefault from "axios";

const localUser = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : { token: "No-Token" };

export const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    Authorization: `Bearer ${localUser.token}`,
  },
});

export const cloudinary = axiosDefault.create({
  baseURL: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}`,
});
