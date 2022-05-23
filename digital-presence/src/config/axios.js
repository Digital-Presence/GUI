import axios from 'axios'
let Http = axios.create({
    baseURL: 'https://localhost:44370/api/',
    credentials: 'include',
    headers: {
        'content-type': 'application/json',
    },
});

export default Http
