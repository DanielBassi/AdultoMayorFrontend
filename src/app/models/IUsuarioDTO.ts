export interface IUsuarioDTO {
    id : number,
    nombre: string,
    apellido: string,
    clave: string,
    correo: string,
    tipoIdentificacion: string,
    numeroIdentificacion: string,
    rol: string,
    estado: boolean,
    jwtToken: string  
}
