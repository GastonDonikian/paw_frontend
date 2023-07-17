import {apiPrivate} from "./ServiceUtils";
import {NewSubjectModel} from "../Models/Subject";
import {preferredLanguage} from "../i18n/i18n";

export function getIdFromSubjectUrl(url: String){
    const splitUrl = url.split('/');
    return splitUrl[4]
}

export async function apiGetSubject(id: number){
    const response = await apiPrivate("/subjects/" + id)
    return response.data
}
export async function apiGetSubjects(id?: number,page?: number, taught?: boolean, categories?: string[], levels?: string[]){
    let baseUrl = "/subjects?"
    if(id !== undefined) baseUrl = baseUrl + "professorId=" + id + '&';
    if(page !== undefined) baseUrl = baseUrl + "page=" + page + '&';
    if(taught !== undefined) baseUrl = baseUrl + "taught=" + taught + '&';
    if(categories !== undefined){
        for(const category of categories){
            baseUrl = baseUrl + "categories=" + category + '&'
        }
    }
    if(levels !== undefined){
        for(const level of levels){
            baseUrl = baseUrl + "levels=" + level + '&'
        }
    }
    baseUrl = baseUrl + "language=" + preferredLanguage.toString()
    const response = await apiPrivate.get(baseUrl)
    return response.data;
}

export async function apiRequestNewSubject(subject: NewSubjectModel){
    return await apiPrivate.post("/subjects",{
        subject: subject.name,
        message: subject.description,
        level: subject.level,
        category: subject.category
    })

}

