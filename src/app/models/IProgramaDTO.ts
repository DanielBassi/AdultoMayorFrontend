import { IActividadDTO } from "./IActividadDTO";
import { IComponenteDTO } from "./IComponenteDTO";
import { ISubindiceDTO } from "./ISubindiceDTO";

export interface IProgramaDTO {
    id:number;
    nombre: string,
    estado:boolean,
    color:string,
    nombreManual: string,
    esClub: boolean,
    created_at:Date,
    subindices:Array<ISubindiceDTO>
    actividades:Array<IActividadDTO>
    componentes:Array<IComponenteDTO>
}
