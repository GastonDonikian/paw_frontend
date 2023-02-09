import {apiPrivate} from "./ServiceUtils";

export async function apiGetSubjects(id?: number,page?: number, taught?: boolean){
    let baseUrl = "/subjects?"
    if(id !== undefined) baseUrl = baseUrl + "professorId=" + id + '&';
    if(page !== undefined) baseUrl = baseUrl + "page=" + page + '&';
    if(taught !== undefined) baseUrl = baseUrl + "taught=" + taught + '&';
    const response = await apiPrivate.get(baseUrl)
    return response.data;
}