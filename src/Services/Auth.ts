import {apiPublic} from "./ServiceUtils"


export async function apiLogin(username: string, password: string){
    return await apiPublic.post('/login', {"username": username, "password": password});
}





