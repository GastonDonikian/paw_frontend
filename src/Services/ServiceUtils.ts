import axios from "axios";

export const apiPublic = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/`,
});

export const apiPrivate = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/`,
    headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
    },
});

export const axiosPrivate = axios.create({
    baseURL: "",
    headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
    },
});