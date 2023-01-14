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
    this.id = '00000000-0000-0000-0000-000000000000'
    this.estado = true
    this.afiliado_id = '00000000-0000-0000-0000-000000000000'
    this.fecha =new Date
    this.descripcionEnfermedadBase = ''
    this.tratamientoEnfermedadBase = ''

  }
}
