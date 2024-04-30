import axios from "axios";

const localUser = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : { token: "No-Token" };

const url = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    Authorization: `Bearer ${localUser.token}`,
  },
});

export default url;
