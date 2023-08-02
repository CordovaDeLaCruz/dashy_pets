export type ListDiseaseModelResponse = DiseaseModelResponse[]

export class DiseaseModelResponse {
  idEnfermedad: number
  descripcionEnfermedad: string
  estadoEnfermedad: string
  viewDisease: boolean
  editDisease: boolean
  addDisease: boolean
}
