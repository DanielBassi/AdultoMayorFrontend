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
        this.id = '00000000-0000-0000-0000-000000000000'
        this.estado = true
        this.afiliado_id = '00000000-0000-0000-0000-000000000000'
        this.fecha = new Date
        this.descripcionAlergia = ''
        this.tratamientoAlergia = ''
    }
}
