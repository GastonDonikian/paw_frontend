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
    let basicUrl = "/subjects"
    if(id !== undefined) basicUrl = basicUrl + "?professorId=" + id + '&';
    if(page !== undefined) basicUrl = basicUrl + "?page=" + page + '&';
    if(taught !== undefined) basicUrl = basicUrl + "?taught=" + taught + '&';
    const response = await apiPrivate.get(basicUrl)
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