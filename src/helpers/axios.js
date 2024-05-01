import axios from "axios";

const url = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
        }`,
    },
});

export default url;
