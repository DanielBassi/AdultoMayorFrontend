export class IComponenteDTO {
    id:number
    nombre: string
    estado:boolean
    indicador:string
    programa_Id:number
    created_at:Date

    /**
     *
     */
    constructor() {
    this.id = 0
    this.nombre = ''
    this.estado = true
    this.indicador = ''
    this.programa_Id = 0
    this.created_at = new Date

    }
}
