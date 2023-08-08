export class PetClassModel {
    idClaseMascota: number
    descripcionClaseMascota: string
    estadoClaseMascota: string
    addPetClass: boolean
    editPetClass: boolean
    viewPetClass: boolean
}

export class CreatePetClassModelRequest {
    descripcionClaseMascota: string
}

export class PetClassModelResponse {
    message: string
}