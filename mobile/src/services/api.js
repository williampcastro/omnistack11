import axios from 'axios';

const api = axios.create({
    // ip of expo
    baseURL: 'http://192.168.0.106:3333/'
})

export default api;