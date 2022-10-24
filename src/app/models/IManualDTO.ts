export class IManualDTO {
  id?: string
  nombre: string
  tipo: string
  programa_id?: string
  created_at?: Date
  updated_at?: any
  base64?: any

  constructor() {
    this.id = ''
    this.nombre = ''
    this.tipo = ''
    this.programa_id = ''
    this.created_at = new Date
    this.updated_at = null
  }

}
