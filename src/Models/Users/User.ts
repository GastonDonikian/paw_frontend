export interface UserModel{
    id: number;
    email: string;
    name: string;
    surname: string;
    phoneNumber: string;

}

export interface ProfessorModel extends UserModel {
    description: string;
    location: string;
    schedule: string;
    studies: string;
    rating: number;
}