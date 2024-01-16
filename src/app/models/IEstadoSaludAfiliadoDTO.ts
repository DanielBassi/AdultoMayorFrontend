

export class IEstadoSaludAfiliadoDTO {
  id: string
  estado: boolean
  afiliado_id: string
  fecha: Date
  discapacidad: boolean
  descripcionDiscapacidad: string
  estatura: Number
  peso: Number
  presionArterial:string
  presionSistolica:string
  presionDiastolica:string
  movilidadAutonoma: boolean

  /**
   *
   */
  constructor() {
    this.id = '00000000-0000-0000-0000-000000000000'
    this.estado = true
    this.afiliado_id = '00000000-0000-0000-0000-000000000000'
    this.fecha =new Date
    this.discapacidad = false
    this.descripcionDiscapacidad = ''
    this.estatura = 0
    this.peso= 0
    this.presionArterial = ''
    this.presionSistolica = ''
    this.presionDiastolica = ''
    this.movilidadAutonoma= true

  }
}
