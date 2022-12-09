import axios from "axios";
export default axios.create({
    baseURL: "https://pinkbanana-api.onrender.com/", // back-end deploy host url
    // baseURL: "https://localhost:3500/api", // back-end local host url
    headers: {
        "Content-type": "application/json"
    }
})