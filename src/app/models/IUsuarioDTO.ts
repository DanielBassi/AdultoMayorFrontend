export class IUsuarioDTO {
    id : number
    nombre: string
    apellido: string
    clave: string
    correo: string
    tipoIdentificacion: string
    numeroIdentificacion: string
    rol: string
    estado: boolean
    jwtToken: string

    /**
     *
     */
    constructor() {
      this.id = 0
      this.nombre = ''
      this.apellido = ''
      this.clave = ''
      this.correo = ''
      this.tipoIdentificacion = ''
      this.numeroIdentificacion = ''
      this.rol = ''
      this.estado = true
      this.jwtToken = ''

    }
}
