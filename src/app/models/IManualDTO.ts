export class IManualDTO {
    id?: string
  nombre: string
  tipo: string
  servicios_id?: string
  create_time?: Date
  update_time?: any
  base64?: any

  constructor() {
    this.id = ''
    this.nombre = ''
    this.tipo = ''
    this.servicios_id = ''
    this.create_time = new Date
    this.update_time = null
  }

  

}
