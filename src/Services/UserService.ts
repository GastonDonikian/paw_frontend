import {apiPrivate, apiPublic} from "./ServiceUtils";
import {RegisterStudentModel} from "../Models/RegisterStudentModel";

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
                "phoneNumber": registerStudent.phoneNumber});
}