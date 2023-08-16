export class UserRoleAppModel {
    usuario: string
    idRolApp: number
    descripcionRolApp: string
    estadoUsuarioRolApp: string
    viewUserRole: boolean
    editUserRole: boolean
    addUserRole: boolean
    activateUserRole: boolean = false
    deactivateUserRole: boolean = false
}

export class CreateUserRoleAppModelRequest {
    usuario: string
    idRolApp: number
}

export class UserRoleAppModelResponse {
    message: string
}  