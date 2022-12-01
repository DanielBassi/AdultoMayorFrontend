export class IAlergiasAfiliadoDTO {
    id: any
    estado: boolean
    afiliado_id: any
    fecha: Date
    descripcionAlergia: string
    tratamientoAlergia: string

    /**
     *
     */
    constructor() {
        this.id = ''
        this.estado = true
        this.afiliado_id = ''
        this.fecha = new Date
        this.descripcionAlergia = ''
        this.tratamientoAlergia = ''
    }
}
