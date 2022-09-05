import { IActividadDTO } from "./IActividadDTO";
import { IComponenteDTO } from "./IComponenteDTO";

export interface IProgramaDTO {
    id:number;
    nombre: string,
    nombreManual: string,
    estado:boolean,
    esClub: boolean,
    created_at:Date,
    actividades:Array<IActividadDTO>
    componentes:Array<IComponenteDTO>
}
