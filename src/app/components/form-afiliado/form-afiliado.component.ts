import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO'
import { AffiliateService } from  '../../services/affiliate.service';
import{ IEstadoSaludAfiliadoDTO } from "../../models/IEstadoSaludAfiliadoDTO"
@Component({
  selector: 'app-form-afiliado',
  templateUrl: './form-afiliado.component.html',
  styleUrls: ['./form-afiliado.component.css']
})
export class FormAfiliadoComponent implements OnInit {

  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input() crud: any = {
    entidad: new IAfiliadoDTO(),
    accion: 'INSERT'
  }

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
  popupVisibleEstadosalud: boolean = false
  popupVisibleEnfermedades: boolean = false;
  /* Notificaciones */
  notificaciones: any[] = []

  /* pop-ups */


  constructor(private sharedService : SharedService, private affiliateService : AffiliateService) { }

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
    this.generos=["Masculino","Femenino", "Otro"]
  }
  private listarTipos(){
    this.tipos=["c.c.","t.i.","r.c."]
  }
  private listarGrupoSanguineo(){
    this.grupoSanguineo=["A","B","AB","O"]
    this.rh=["+","-"]
  }
  private listarRazas(){
    this.razas=["AFRODESCENDIENTE","IDIGENA","ROOM","PALENQUE","RAIZAL", "OTRO","NINGUNO"]
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
    /* console.log(e); */

  }

  submit(event: Event) {
    event.preventDefault()
    console.log(this.crud.entidad)
    this.crudEvent.emit({...this.crud})

      this.crud.entidad = new IAfiliadoDTO()
    /* if( this.validateDataEmit() ) {

    } */
  }

  buttonOptionsAlergias = {
    text: 'Alergias',
    type: 'default',
    icon: 'fa-solid fa-virus-covid',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleAlergias = true
  }

  buttonOptionsEstadoSalud = {
    text: 'Estado de salud',
    type: 'default',
    icon: 'fas fa-info-circle',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleEstadosalud = true
  }

  buttonOptionsEnfermedadesBase = {
    text: 'Enfermedades',
    type: 'default',
    icon: 'fas fa-images',
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
