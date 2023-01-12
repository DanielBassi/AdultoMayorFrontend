export class IEstadoSaludAfiliadoDTO {
  id: string
  estado: boolean
  afiliado_id: string
  fecha: Date
  discapacidad: boolean
  descripcionDiscapacidad: string
  estatura: Number
  peso: Number
  movilidadAutonoma: boolean

  /**
   *
   */
  constructor() {
    this.id = ''
    this.estado = true
    this.afiliado_id = ''
    this.fecha =new Date
    this.discapacidad = false
    this.descripcionDiscapacidad = ''
    this.estatura = 0
    this.peso= 0
    this.movilidadAutonoma= true

  }
}
