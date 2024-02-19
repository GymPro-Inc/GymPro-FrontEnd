import axios from 'axios';

const axiosDefault = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosDefault;

// import api from "../infra/api"

// const { data } = await api.post('/login', {
// });
