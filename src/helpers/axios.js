import axios from "axios";

const localUser = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : { token: "No-Token" };

const url = axios.create({
  baseURL: "https://2bldqjc8-3001.brs.devtunnels.ms/api",
  headers: {
    Authorization: `Bearer ${localUser.token}`,
  },
});

export default url;
