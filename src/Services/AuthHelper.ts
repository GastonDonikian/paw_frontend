import { apiLogin } from './Auth'
import { apiGetUserById } from "./UserService";
import jwt from "jwt-decode";
import {UserModel} from "../Models/Users/User";
export async function login(username: string,password: string,rememberMe: boolean){
    console.log(username + " " + password + " " + rememberMe);
    let authenticationData;
    authenticationData = await apiLogin(username, password);
    console.log(authenticationData)
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
    // TODO: Set user in local storage
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if(token === null)
        return undefined;
    //@ts-ignore
    let user = await apiGetUserById(jwt(token)['id']);
    return user

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
    // @ts-ignore
    return token && jwt(token)['exp'] <= Date.now();
}



export async function getUserById(id: number) {
    return apiGetUserById(id);
}