import {apiPrivate, apiPublic} from "./ServiceUtils";
import {getUserId} from "./AuthHelper"


function buildQuery(baseUrl: string, professorId?: number, studentId?: number, lessonId?: number, subjectId?: number, status?: string){
    baseUrl += '?'
    if(professorId !== undefined){
        baseUrl = baseUrl + "professorId=" + professorId + '&';
    }
    if(subjectId !== undefined){
        baseUrl = baseUrl + "subjectId=" + subjectId + '&';
    }
    if(studentId !== undefined){
        baseUrl = baseUrl + "studentId=" + studentId + '&';
    }
    if(lessonId !== undefined){
        baseUrl = baseUrl + "lessonId=" + lessonId + '&';
    }
    if(status !== undefined){
        baseUrl = baseUrl + "status=" + status + '&';
    }

    return baseUrl;
}


export async function apiGetLessons(professorId?: number, studentId?: number, lessonId?: number, subjectId?: number, status?: string) {
    let baseUrl = "/lessons"
    const response = await apiPrivate.get(buildQuery(baseUrl,professorId,studentId,lessonId,subjectId,status));
    return response.data
}

export async function apiRequestLesson(contractId: number){
    const response = await apiPrivate.post("/lessons",{"contractId": contractId})
    return response.data;
}

export async function apiCancelLesson(lessonId: number) {
    const response = await apiPrivate.delete("/lessons/" + lessonId)
    return response.data;
}