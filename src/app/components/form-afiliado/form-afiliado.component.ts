import { Component, OnInit, Input, Output, SimpleChanges,ViewChild, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO'
import { AffiliateService } from  '../../services/affiliate.service';
import{ IEstadoSaludAfiliadoDTO } from "../../models/IEstadoSaludAfiliadoDTO"
@Component({
  selector: 'app-form-afiliado',
  templateUrl: './form-afiliado.component.html',
  styleUrls: ['./form-afiliado.component.css']
})
export class FormAfiliadoComponent implements OnInit, AfterViewInit {
  //@ViewChild('myCanvasFirmaAfiliado')
  @Output() crudEvent = new EventEmitter<any>()
  @Input() crud: any = {
    entidad: new IAfiliadoDTO(),
    accion: 'INSERT'
  }
  canvas: ElementRef<HTMLCanvasElement> = {} as ElementRef;
  context: CanvasRenderingContext2D;

  afiliados: IAfiliadoDTO[] =[]
  estadosSaludAfiliado: IEstadoSaludAfiliadoDTO[]
  modoView: boolean = false
  generos: any[]=[]
  titulo:string=""
  tipos:any[]=[]
  razas:any[]=[]
  presenciaAlergias: boolean = false
  grupoSanguineo: any[]=[]
  rh: any[]=[]
  colombiaMayor: boolean = false
  sabeLeer: boolean = false
  viveSolo: boolean = false
  popupVisibleAlergias: boolean = false
  popupVisibleFirma: boolean = false
  popupVisibleFirmaAcudiente: boolean = false
  popupVisibleHuella: boolean = false
  popupVisibleEstadosalud: boolean = false
  popupVisibleEnfermedades: boolean = false;
  /* Notificaciones */
  notificaciones: any[] = []
  opcionesDeHuella: any = {}

  /* pop-ups */
  constructor(private sharedService : SharedService, private affiliateService : AffiliateService){}
  ngAfterViewInit(): void {  }

  ngOnInit() {
    this.listarGeneros()
    this.listarGrupoSanguineo()
    this.listarTipos()
    this.listarRazas()
    this.iniciarTitulo()
  }
  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.accion === 'VIEW'
  }
  private iniciarTitulo(){
    switch(this.crud.accion){
      case 'INSERT':
        this.titulo="Ingresar nuevo afiliado"
      break;
      case 'UPDATE':
        this.titulo="Editar afiliado"
      break;
      case 'VIEW':
        this.titulo="Detalles del afiliado"
    }
  }
  private listarGeneros(){
    this.generos=["Masculino","Femenino"]
  }
  private listarTipos(){
    this.tipos=["c.c.","t.i.","r.c."]
  }
  private listarGrupoSanguineo(){
    this.grupoSanguineo=["A","B","AB","O"]
    this.rh=["+","-"]
  }
  private listarRazas(){
    this.razas=["AFRODESCENDIENTE","INDIGENA","ROOM","PALENQUE","RAIZAL", "OTRO","NINGUNO"]
  }


  private validateDataEmit(): boolean {

    /* Restart notifications */
    this.notificaciones = []

    if( this.crud.servicio.caracteristicas.length < 1 ) {
      this.notificaciones.push({
        message: 'Debe ingresar como minimo una caracteristica del servicio',
        type: 'error',
      })
    }

    if( this.crud.servicio.recursos.length != 5 ) {
      this.notificaciones.push({
        message: 'Debe ingresar 5 recursos',
        type: 'error',
      })
    }

    if( !this.crud.servicio?.longitud || !this.crud.servicio?.latitud ) {
      this.notificaciones.push({
        message: 'Debe ingresar la ubicación del servicio',
        type: 'error',
      })
    }

    this.notificaciones.forEach(n => {
      this.sharedService.notify(n.message, n.type)
    })

    return this.notificaciones.length === 0
  }

  estadoSaludEvent(estadosSaludAfiliado){
    this.crud.entidad.estadosSaludAfiliado=estadosSaludAfiliado
  }
  alergiaEvent(alergiasAfiliado){
    this.crud.entidad.alergiasAfiliado=alergiasAfiliado
  }
  enfermedadEvent(enfermedadesBaseAfiliado){
    this.crud.entidad.enfermedadesBaseAfiliado=enfermedadesBaseAfiliado
  }

  popupEvent(e){

  }
  firmaAfiliadoEvent(event){
    this.crud.entidad.firma=event
    this.popupVisibleFirma= false;
  }

  firmaAcudienteEvent(event){
    this.crud.entidad.firmaAcudiente=event
    this.popupVisibleFirmaAcudiente= false;
  }

  submit = (event: Event) => {
    event.preventDefault()
    this.crudEvent.emit({...this.crud})
    /* this.crud.entidad = new IAfiliadoDTO() */
  }

  public onHiding(): void {

    if(localStorage.getItem('Base_64_fingerPrint') === null) return

    if(this.opcionesDeHuella?.onHiding === 'Afiliado') this.crud.entidad.huella = localStorage.getItem('Base_64_fingerPrint')

    if(this.opcionesDeHuella?.onHiding === 'Acudiente') this.crud.entidad.huellaAcudiente = localStorage.getItem('Base_64_fingerPrint')

    localStorage.clear()
  }

  buttonOptionsAlergias = {
    text: 'Alergias',
    type: 'default',
    icon: 'fa-solid fa-virus-covid',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleAlergias = true
  }

  buttonOptionsFirma = {
    type: 'normal',
    icon: 'fa-solid fa-plus',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleFirma = true
  }

  buttonOptionsFirmaAcudiente = {
    type: 'normal',
    icon: 'fa-solid fa-plus',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleFirmaAcudiente = true
  }

  buttonOptionsHuella = {
    type: 'normal',
    icon: 'fa-solid fa-plus',
    useSubmitBehavior: false,
    onClick: (data) => {
      this.popupVisibleHuella = true
      this.opcionesDeHuella = {
        title: 'Huella afiliado',
        onHiding: 'Afiliado'
      }
    }
  }

  buttonOptionsHuellaAcudiente = {
    type: 'normal',
    icon: 'fa-solid fa-plus',
    useSubmitBehavior: false,
    onClick: (data) => {
      this.popupVisibleHuella = true
      this.opcionesDeHuella = {
        title: 'Huella acudiente',
        onHiding: 'Acudiente'
      }
    }
  }

  buttonOptionsEstadoSalud = {
    text: 'Estado de salud',
    type: 'default',
    icon: 'fa-sharp fa-solid fa-notes-medical',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleEstadosalud = true
  }

  buttonOptionsEnfermedadesBase = {
    text: ' Enfermedades',
    type: 'default',
    icon: 'fa-solid fa-bed-pulse',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleEnfermedades = true
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }
}
