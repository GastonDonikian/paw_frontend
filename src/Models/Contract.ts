export interface Contract {
    name: string,
    surname: string,
    subject: string,
    rating: number,
    price: string,
    url: string,

    description: string,
    modality: string,
    studies: string,
    location: string
}

export interface CreateContractInterface{
    description: string,
    local: boolean,
    remote: boolean,
    price: number
}

export interface ContractCardInterface{
    description: string,
    local: boolean,
    remote:boolean,
    price: string,
    status: string,

    url: string,
    rating: number,
    summaryProfessor: {
        email: string,
        name: string,
        surname: string,
        phoneNumber: string,
        location: string,
        studies: string,
        url: string
    }
    subject: {
        "category": string,
        "level": string,
        "name": string
    }
}