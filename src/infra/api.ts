import axios from 'axios';
import { applyErrorHandler } from './interceptors/applyErrorHandler';
import { criaLogDev } from './interceptors/criaLogDev';

const Api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:5173",
        'Access-Control-Allow-Credentials': 'true',
    }
});

applyErrorHandler(Api);

criaLogDev(Api, 'ApiUseallGeral');


export default Api;

// import api from "../infra/api"

// const { data } = await api.post('/login', {
// });

