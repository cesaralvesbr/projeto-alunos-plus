import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:44318",
})

export default api;