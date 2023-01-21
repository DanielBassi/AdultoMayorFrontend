export class ISubindiceDTO {
    id:number
    nombre: string
    programa_Id:number
    indicador:string
    estado:boolean
    created_at:Date

    /**
     *
     */
    constructor() {
    this.id = 0
    this.nombre = ''
    this.estado = true
    this.programa_Id = 0
    this.indicador = ''
    this.created_at = new Date

    }
}
