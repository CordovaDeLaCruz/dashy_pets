export type ListCustomerModel = CustomerModel[]

export class CustomerModel {
  idCliente: number
  dni: number
  nombreCliente: string
  sexo: string
  fechaNacimiento: string
  correo: string
  celular: string
  direccion: string
  estadoCliente: string
  addCustomer: boolean
  viewCustomer: boolean
  editCustomer: boolean
}
