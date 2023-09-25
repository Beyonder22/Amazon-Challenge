import axios from "axios";

const instance = axios.create({
    baseURL: "your hosted url" 
    // The API (cloud function) URL
});

export default instance;