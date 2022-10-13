export class IActividadDTO {
    id:number
    nombre: string
    fecha: Date
    descripcion: string
    programa_Id:number
    programa_nombre:string
    subindice_Id:number
    subindice_nombre:string
    nombreComprobante: string
    estadoActividad_Id:number
    estadoActividad_Descripcion:string
    usuario_Id:number
    usuario_nombre:	string
    indicador_Id:number
    created_at:Date

    /**
     *
     */
    constructor() {
      this.id = 0
      this.nombre = ''
      this.fecha = new Date
      this.descripcion = ''
      this.programa_Id = 0
      this.programa_nombre = ''
      this.subindice_Id = 0
      this.subindice_nombre = ''
      this.nombreComprobante = ''
      this.estadoActividad_Id = 0
      this.estadoActividad_Descripcion = ''
      this.usuario_Id = 0
      this.usuario_nombre = ''
      this.indicador_Id = 0
      this.created_at = new Date

    }
}
