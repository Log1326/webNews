import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        // authentication: localStorage.getItem(USER_LO),
    },
});
