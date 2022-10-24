import { IActividadDTO } from "./IActividadDTO";
import { IComponenteDTO } from "./IComponenteDTO";
import { IManualDTO } from "./IManualDTO";
import { ISubindiceDTO } from "./ISubindiceDTO";

export class IProgramaDTO {
  id: number
  nombre: string
  estado: boolean
  color: string
  nombreManual: string
  esClub: boolean
  created_at: Date
  subindices: Array<ISubindiceDTO>
  actividades: Array<IActividadDTO>
  componentes: Array<IComponenteDTO>
  manuales: Array<IManualDTO>
  /**
   *
   */
  constructor() {
    this.id = 0
    this.nombre = ''
    this.estado = true
    this.color = ''
    this.nombreManual = ''
    this.esClub = true
    this.created_at = new Date
    this.subindices = []
    this.actividades = []
    this.componentes = []
    this.manuales = []
  }
}
