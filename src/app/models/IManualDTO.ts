export class IManualDTO {
  id?: number
  nombre: string
  tipo: string
  programa_id?: number
  created_at?: Date
  updated_at?: any
  base64?: any

  constructor() {
    this.id = 0
    this.nombre = ''
    this.tipo = ''
    this.programa_id = 0
    this.created_at = new Date
    this.updated_at = null
  }

}
