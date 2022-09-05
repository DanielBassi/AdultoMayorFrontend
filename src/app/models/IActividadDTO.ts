export interface IActividadDTO {
    id:number;
    nombre: string,
    fecha: Date,
    descripcion: string,
    programa_Id:number,
    subindice_Id:number,
    nombreComprobante: string,
    estadoActividad_Id:number,
    usuario_Id:number,
    indicador_Id:number,
    created_at:Date
}
