import { apiLogin } from '../../Services/Auth'
import { apiGetUserById } from "../../Services/UserService";
import jwt from "jwt-decode";
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
    token && await getUserFromToken(token);
}

export async function getUserFromToken(token: string){
    // @ts-ignore
    console.log(await getUserById(jwt(token)['id']));
}

export default function isVerified() {
    let token = localStorage.getItem('token') === null ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if(token) {
        // @ts-ignore
        return jwt(token)['verified']
    }
    return false;
}

export async function getUserById(id: number) {
    return apiGetUserById(id);
}