import {apiPrivate, apiPublic} from "./ServiceUtils";
import {RegisterStudentModel} from "../Models/RegisterStudentModel";
import {RegisterProfessorModel} from "../Models/RegisterProfessorModel";

export async function apiGetUserById(id: number){
    let userById = "users/" + id;
    console.log(userById)
    return await apiPrivate.get(userById);
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