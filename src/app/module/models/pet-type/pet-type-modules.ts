export class PetTypeModel {
    idTipoMascota: number
    descripcionTipoMascota: string
    estadoTipoMascota: string
    addPetType: boolean
    editPetType: boolean
    viewPetType: boolean
}

export class CreatePetTypeModelRequest {
    descripcionTipoMascota: string
}

export class PetTypeModelResponse {
    message: string
}