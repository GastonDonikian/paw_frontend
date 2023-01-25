import { apiPrivate, apiPublic,axiosPrivate } from "./ServiceUtils"


export async function login(username: string, password: string){
    return await apiPublic.post('/login', {"username": username, "password": password});
}



