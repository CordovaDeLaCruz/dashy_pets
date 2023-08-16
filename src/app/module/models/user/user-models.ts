export class UserModel {
  usuario: string
  clave: string
  estadoUsuario: string
  viewUser: boolean
  editUser: boolean
  addUser: boolean
  activateUser: boolean = false
  deactivateUser: boolean = false
  claveSinEncriptar: string
}

export class CreateUserModelRequest {
  usuario: string
  clave: string
  claveSinEncriptar: string
}

export class UserModelResponse {
  message: string
} 