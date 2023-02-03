import {apiPrivate, apiPublic} from "./ServiceUtils";


export async function getLocations(){
    const response = await apiPublic.get('/locations')
    return response.data;
}

export async function getLevels(){
    const response = await apiPublic.get('/levels')
    return response.data;
}
export async function getCategories(){
    const response = await apiPublic.get('/categories')
    return response.data;
}

export async function getContractStatus(){
    const response = await apiPublic.get('/contractStatus')
    return response.data;
}