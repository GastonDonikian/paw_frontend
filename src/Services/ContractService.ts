import {apiPrivate, apiPublic} from "./ServiceUtils";
import {Category} from "../Models/Enums/Category";







async function apiGetContracts(professorId?: number,subjectId?: number, categories?: [string],
                               levels?: [string],status: string='ACTIVE', locations?: [string],
                               remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    let baseUrl = "/contracts?"
    if(professorId !== undefined){
        baseUrl = baseUrl + "professorId=" + professorId + '&';
    }
    if(subjectId !== undefined){
        baseUrl = baseUrl + "subjectId=" + subjectId + '&';
    }
    if(categories !== undefined){
        for(var category of categories){
            baseUrl = baseUrl + "categories=" + category + '&'
        }
    }
    if(levels !== undefined){
        for(var level of levels){
            baseUrl = baseUrl + "levels=" + level + '&'
        }
    }
    if(locations !== undefined){
        for(var location of locations){
            baseUrl = baseUrl + "locations=" + location + '&'
        }
    }
    if(remote !== undefined){
        baseUrl = baseUrl + "remote=" + remote + '&';
    }
    if(local !== undefined){
        baseUrl = baseUrl + "local=" + remote + '&';
    }
    if(orderBy !== undefined){
        baseUrl = baseUrl + "orderBy=" + orderBy + '&';
    }
    if(search !== undefined){
        baseUrl = baseUrl + "search=" + search + '&';
    }
    const response = await apiPublic.get(baseUrl)
    return response.data;
}