import {apiPrivate} from "./ServiceUtils";


function buildQuery(baseUrl: string,reviewId?: number, lessonId?: number, professorId?: number,userId?: number){
    baseUrl += "?"
    if(reviewId !== undefined){
        baseUrl = baseUrl + "reviewId=" + reviewId + '&';
    }
    if(lessonId !== undefined){
        baseUrl = baseUrl + "lessonId=" + lessonId + '&';
    }
    if(professorId !== undefined){
        baseUrl = baseUrl + "professorId=" + professorId + '&';
    }
    if(userId !== undefined){
        baseUrl = baseUrl + "userId=" + userId + '&';
    }
    return baseUrl;
}

export async function apiGetReviews(reviewId?: number, lessonId?: number, professorId?: number,userId?: number) {
    let baseUrl = "/review"
    const response = await apiPrivate.get(buildQuery(baseUrl,reviewId,lessonId,professorId,userId));
    return response.data
}

export async function apiPostReview(lessonId: number, message: string, rating: number){
    let baseUrl = "/review"
    const response = await apiPrivate.post(baseUrl, {
        "lessonId":lessonId,
        "message": message,
        "rating": rating
    });
    return response.data
}