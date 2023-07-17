import {apiPublic} from "./ServiceUtils";
import {preferredLanguage} from "../i18n/i18n";


export async function getLocations(){
    const url = "/locations?language=" + preferredLanguage.toString()
    const response = await apiPublic.get(url)
    return response.data;
}

export async function getLevels(){
    const url = "/levels?language=" + preferredLanguage.toString()
    const response = await apiPublic.get(url)
    return response.data;
}
export async function getCategories(){
    const url = "/categories?language=" + preferredLanguage.toString()
    const response = await apiPublic.get(url)
    return response.data;
}

export async function getContractStatus(){
    const url = "/contractStatus?language=" + preferredLanguage.toString()
    const response = await apiPublic.get(url)
    return response.data;
}