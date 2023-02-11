import {apiPrivate, apiPublic} from "./ServiceUtils";
import {RegisterStudentModel} from "../Models/Users/RegisterStudentModel";
import {RegisterProfessorModel} from "../Models/Users/RegisterProfessorModel";
import {EditProfessorModel} from "../Models/Users/EditProfessorModel";
import {getUserFromToken, getUserId} from "./AuthHelper";
import {EditStudentModel} from "../Models/Users/EditStudentModel";

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

export function getUserIdFromUrl(url: string){
    const splitUrl = url.split('/');
    return splitUrl[4]
}


export async function apiEditProfessor(editProfessor: EditProfessorModel){
    let user = await getUserFromToken()
    editProfessor.name = editProfessor.name || user.name;
    editProfessor.surname = editProfessor.surname || user.surname
    editProfessor.studies = editProfessor.studies || user.studies
    editProfessor.schedule = editProfessor.schedule || user.schedule
    editProfessor.description = editProfessor.description || user.description
    editProfessor.phoneNumber = editProfessor.phoneNumber || user.phoneNumber
    return await apiPrivate.put("/users/" + getUserId(),{
        "name": editProfessor.name,
        "surname": editProfessor.surname,
        "studies": editProfessor.studies,
        "schedule": editProfessor.schedule,
        "description": editProfessor.description,
        "phoneNumber": editProfessor.phoneNumber
    })
}

export async function apiEditStudent(editStudent: EditStudentModel){
    let user = await getUserFromToken()
    editStudent.name = editStudent.name || user.name;
    editStudent.surname = editStudent.surname || user.surname
    editStudent.phoneNumber = editStudent.phoneNumber || user.phoneNumber
    return await apiPrivate.put("/users/" + getUserId(),{
        "name": editStudent.name,
        "surname": editStudent.surname,
        "phoneNumber": editStudent.phoneNumber
    })
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