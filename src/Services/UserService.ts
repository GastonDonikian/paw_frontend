import {apiPrivate} from "./ServiceUtils";

export async function apiGetUserById(id: number){
    let userById = "users/" + id;
    return await apiPrivate.get(userById);
}