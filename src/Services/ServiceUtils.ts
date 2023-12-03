import axios from "axios";

export const apiPublic = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/`,
});

export const apiPrivate = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/`,
    headers: {
        "Content-Type": "application/json",
    },
});

apiPrivate.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const axiosPrivate = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosPrivate.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
