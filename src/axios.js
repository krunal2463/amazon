import axios from "axios";

const instance = axios.create({
    baseURL: '...' // the APT (cloud function) URL
});

export default instance;