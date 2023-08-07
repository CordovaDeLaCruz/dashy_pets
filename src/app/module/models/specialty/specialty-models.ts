export class SpecialtyModel {
  idEspecialidad: number
  descripcionEspecialidad: string
  estadoEspecialidad: string
  viewSpecialty: boolean
  editSpecialty: boolean
  addSpecialty: boolean
}

export class CreateSpecialtyModelRequest {
  descripcionEspecialidad: string
}

export class SpecialtyModelResponse {
  message: string
}
