export interface IActividadDTO {
    id:number;
    nombre: string,
    fecha: Date,
    descripcion: string,
    programa_Id:number,
    programa_nombre:string,
    subindice_Id:number,
    subindice_nombre:string,
    nombreComprobante: string,
    estadoActividad_Id:number,
    estadoActividad_Descripcion:string,
    usuario_Id:number,
    usuario_nombre:	string,
    indicador_Id:number,
    created_at:Date
}
