export class DiseaseModel {
  idEnfermedad: number
  descripcionEnfermedad: string
  estadoEnfermedad: string
  viewDisease: boolean
  editDisease: boolean
  addDisease: boolean
}

export class CreateDiseaseModelRequest {
  descripcionEnfermedad: string
}

export class DiseaseModelResponse {
  message: string
}
