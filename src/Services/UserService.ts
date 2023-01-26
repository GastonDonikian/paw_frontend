import {apiPrivate} from "./ServiceUtils";

export async function apiGetUserById(id: number){
    let userById = "users/" + id;
    console.log(userById)
    return await apiPrivate.get(userById);
}