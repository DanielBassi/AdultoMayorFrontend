export class IEnfermedadBaseAfiliadoDTO {
  id: string
  estado: boolean
  afiliado_id: string
  fecha: Date
  descripcionEnfermedadBase: string
  tratamientoEnfermedadBase: string
  /**
   *
   */
  constructor() {
    this.id = ''
    this.estado = true
    this.afiliado_id = ''
    this.fecha =new Date
    this.descripcionEnfermedadBase = ''
    this.tratamientoEnfermedadBase = ''

  }
}
