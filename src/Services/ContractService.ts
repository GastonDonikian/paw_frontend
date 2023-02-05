import {apiPrivate, apiPublic} from "./ServiceUtils";
import {Category} from "../Models/Enums/Category";


function buildQuery(baseUrl:string,professorId?: number,subjectId?: number, categories?: [string],
                    levels?: [string],status: string='ACTIVE', locations?: [string],
                    remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    baseUrl += '?'
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

    return baseUrl

}

async function apiGetContracts(professorId?: number,subjectId?: number, categories?: [string],
                               levels?: [string],status: string='ACTIVE', locations?: [string],
                               remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    let baseUrl = "/contracts"
    const response = await apiPublic.get(buildQuery(baseUrl,professorId,subjectId,categories,levels,status,locations,remote,local,orderBy,search))
    return response.data;
}

async function apiGetContractsCard(professorId?: number,subjectId?: number, categories?: [string],
                               levels?: [string],status: string='ACTIVE', locations?: [string],
                               remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    let baseUrl = "/contractsCards"
    const response = await apiPublic.get(buildQuery(baseUrl,professorId,subjectId,categories,levels,status,locations,remote,local,orderBy,search))
    return response.data;
}

export async function getContractsByFilter(categories?: [string],levels?: [string],locations?: [string],modality?: [string],orderBy?: string){
    let remote , local;
    if(modality) {
        if(modality.includes('remote'))
            local = undefined;
        if(modality.includes('local'))
            remote = undefined;
        if(modality.includes('local') && modality.includes('remote'))
            remote = local = undefined;
    }
    return apiGetContractsCard(undefined,undefined,categories,levels,'ACTIVE',locations,remote,local,orderBy,undefined)
}