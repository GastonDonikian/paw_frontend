import {apiPrivate, apiPublic} from "./ServiceUtils";
import {RegisterStudentModel} from "../Models/Users/RegisterStudentModel";
import {RegisterProfessorModel} from "../Models/Users/RegisterProfessorModel";

export async function apiGetUserById(id: number){
    let userById = "/users/" + id;
    const response = await apiPrivate.get(userById)
    return response.data;
}

export async function apiRegisterStudent(registerStudent: RegisterStudentModel){
    return await apiPublic.post("/users",
        {
                "email": registerStudent.email,
                "name": registerStudent.name,
                "surname": registerStudent.surname,
                "password": registerStudent.password,
                "phoneNumber": registerStudent.phoneNumber,
                "isProfessor": false});
}

export async function apiGetSubjects(id?: number,page?: number, taught?: boolean){
    let baseUrl = "/subjects?"
    if(id !== undefined) baseUrl = baseUrl + "professorId=" + id + '&';
    if(page !== undefined) baseUrl = baseUrl + "page=" + page + '&';
    if(taught !== undefined) baseUrl = baseUrl + "taught=" + taught + '&';
    const response = await apiPrivate.get(baseUrl)
    return response.data;
}



export async function apiRegisterProfessor(registerProfessor: RegisterProfessorModel){
    return await apiPublic.post("/users",
        {
            "email": registerProfessor.email,
            "name": registerProfessor.name,
            "surname": registerProfessor.surname,
            "password": registerProfessor.password,
            "phoneNumber": registerProfessor.phoneNumber,
            "schedule": registerProfessor.schedule,
            "studies": registerProfessor.studies,
            "description": registerProfessor.description,
            "location": registerProfessor.location,
            "isProfessor": true});
}