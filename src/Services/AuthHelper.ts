import {apiLogin} from './Auth'
import {apiGetUserById} from "./UserService";
import jwt from "jwt-decode";

export async function login(username: string,password: string,rememberMe: boolean){
    let authenticationData;
    authenticationData = await apiLogin(username, password);
    let token;
    if(authenticationData.headers.authorization !== undefined)
        token = authenticationData.headers.authorization.substring("Bearer ".length);
    if(token !== undefined) {
        if (rememberMe) {
            localStorage.setItem('token', token);
            sessionStorage.removeItem('token');
        }
        else {
            sessionStorage.setItem('token', token);
            localStorage.removeItem('token');
        }
    }
    token && await getUserFromToken();
}

export async function getUserFromToken(){
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if(token === null)
        return undefined;
    const id = (jwt(token) as { id: number })['id'];
    let user = await apiGetUserById(id);
    return user

}

export function getUserId(){
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    let id = -1;
    try { // @ts-ignore
        id = jwt(token)['id']}
    catch (error){
        return -1;
    }
    return id;
}

export function isVerified() {
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if(token) {
        // @ts-ignore
        return jwt(token)['verified']
    }
    return false;
}

export function logout() {
    localStorage.clear();
    sessionStorage.clear();
}

export function isAuthenticated(){
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if(token === null)
        return undefined;
    const exp = (jwt(token) as { exp: number }).exp;
    console.log(token && exp <= Date.now())
    return token && exp <= Date.now();
}



export async function getUserById(id: number) {
    return apiGetUserById(id);
}