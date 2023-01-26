import { apiLogin } from '../../Services/Auth'
import { apiGetUserById } from "../../Services/UserService";

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
}

export async function getUserById(id: number) {
    return apiGetUserById(1);
}