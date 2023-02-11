import {apiPrivate, apiPublic} from "./ServiceUtils";
import {Category} from "../Models/Enums/Category";
import {getUserId} from "./AuthHelper";


function buildQuery(baseUrl:string,professorId?: number,subjectId?: number, categories?: string [],
                    levels?: string [],status: string='ACTIVE', locations?: string [],
                    remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    baseUrl += '?'
    if(professorId !== undefined){
        baseUrl = baseUrl + "professorId=" + professorId + '&';
    }
    if(subjectId !== undefined){
        baseUrl = baseUrl + "subjectId=" + subjectId + '&';
    }
    if(categories !== undefined){
        for(const category of categories){
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
    if(status !== 'ACTIVE'){
        baseUrl = baseUrl + "status=" + status + "&"
    }
    if(orderBy !== undefined){
        baseUrl = baseUrl + "orderBy=" + orderBy + '&';
    }
    if(search !== undefined){
        baseUrl = baseUrl + "search=" + search + '&';
    }
    console.log(status)
    return baseUrl

}

async function apiGetContracts(professorId?: number,subjectId?: number, categories?: string [],
                               levels?: string[],status: string='ACTIVE', locations?: string [],
                               remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    let baseUrl = "/contracts"
    console.log(status)
    const response = await apiPublic.get(buildQuery(baseUrl,professorId,subjectId,categories,levels,status,locations,remote,local,orderBy,search))
    return response.data;
}

export async function apiGetContractsByStatus(status: string){
    return apiGetContracts(getUserId(),undefined,undefined,undefined,status,undefined,undefined,undefined,undefined,undefined);
}

async function apiGetContractsCard(professorId?: number,subjectId?: number, categories?: string [],
                               levels?: string [],status: string='ACTIVE', locations?: string [],
                               remote ?:boolean, local?: boolean, orderBy?: string, search?: string) {
    let baseUrl = "/contractsCards"
    const response = await apiPublic.get(buildQuery(baseUrl,professorId,subjectId,categories,levels,status,locations,remote,local,orderBy,search))
    return response.data;
}

export function getIdFromUrl(url: String){
    const splitUrl = url.split('/');
    return splitUrl[4]
}
export async function apiPauseContract(url:String) {
    const response = await apiPrivate.put('/contracts/' + getIdFromUrl(url),{"status": "PAUSED"})
    return response.data;
}

export async function apiActivateContract(url:String) {
    const response = await apiPrivate.put('/contracts/' + getIdFromUrl(url),{"status": "ACTIVE"})
    return response.data;
}

export async function apiDeleteContract(url:String){
    const response = await apiPrivate.delete('/contracts/' + getIdFromUrl(url))
    return response.data;
}

export async function getContractsForProfessor(id?: number) {
    return await apiGetContractsCard(id,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)
}

export async function getContractsBySearch(search: string){
    return apiGetContractsCard(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,search)
}

export async function getContractsByFilter(categories?: string [],levels?: string [],locations?: string [],modality?: string [],orderBy?: string){
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