import { IAlergiasAfiliadoDTO } from "./IAlergiasAfiliadoDTO"
import { IEstadoSaludAfiliadoDTO } from "./IEstadoSaludAfiliadoDTO"
export class IAfiliadoDTO {
id: string
estado: boolean
nombre: string
fechaIncorporacion: Date
fechaRetiro?: Date
tipoIdentificacion: string
identificacion: string
fechaExpedicionIdentificacion: Date
lugarNacimiento: string
fechaNacimiento: Date
sexo: string
lgtbi: boolean
raza: string
direccion: string
ciudad: string
barrio: string
celular: string
celularAuxiliar: string
correo: string
nombreConyuge: string
tipoIdentificacionConyuge: string
identificacionConyuge: string
presenciaAlergias: boolean
nombreAcudiente: string
celularAcudiente: string
grupoSanguineo: string
rh: string
sisben: string
eps: string
colombiaMayor: boolean
sabeLeer: boolean
viveSolo: boolean
cantidadPersonas: number
ocupacion: string
unidadesProductivas: string
cualidadesPersonales: string
firma: string
huella: string
firmaAcudiente: string
tipoIdentificacionAcudiente: string
identificacionAcudiente: string
huellaAcudiente: string
asistenciasActividades: Array<any>
estadosSalud: Array<IEstadoSaludAfiliadoDTO>
alergiasAfiliado: Array<IAlergiasAfiliadoDTO>
enfermedadesBaseAfiliado: Array<any>

/**
 *
 */
constructor() {
  this.id = ''
  this.estado = true
  this.nombre = ''
  this.fechaIncorporacion = new Date
  this.fechaRetiro = null
  this.tipoIdentificacion = ''
  this.identificacion = ''
  this.fechaExpedicionIdentificacion = new Date
  this.lugarNacimiento = ''
  this.fechaNacimiento = new Date
  this.sexo = ''
  this.lgtbi = false
  this.raza = ''
  this.direccion = ''
  this.ciudad = ''
  this.barrio = ''
  this.celular = ''
  this.celularAuxiliar = ''
  this.correo = ''
  this.nombreConyuge = ''
  this.tipoIdentificacionConyuge = ''
  this.identificacionConyuge = ''
  this.presenciaAlergias = false
  this.nombreAcudiente = ''
  this.celularAcudiente = ''
  this.grupoSanguineo = ''
  this.rh = ''
  this.sisben = ''
  this.eps = ''
  this.colombiaMayor = false
  this.sabeLeer = false
  this.viveSolo = false
  this.cantidadPersonas = 0
  this.ocupacion = ''
  this.unidadesProductivas = ''
  this.cualidadesPersonales = ''
  this.firma = ''
  this.huella = ''
  this.firmaAcudiente = ''
  this.tipoIdentificacionAcudiente = ''
  this.identificacionAcudiente = ''
  this.huellaAcudiente = ''
  this.asistenciasActividades = []
  this.estadosSalud = []
  this.alergiasAfiliado = []
  this.enfermedadesBaseAfiliado = []

}
}
