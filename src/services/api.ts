import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.cup2022.ir/api/v1'
});

api.interceptors.request.use(async function (config) {
    const token = localStorage.getItem('@user:token');
    config.headers = {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    return config;
});

export default api;