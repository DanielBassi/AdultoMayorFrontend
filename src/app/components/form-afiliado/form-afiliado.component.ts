import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO'
import { AffiliateService } from  '../../services/affiliate.service';
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
  modoView: boolean = false
  generos: any[]=[]
  tipos:any[]=[]
  presenciaAlergias: boolean = false
  grupoSanguineo: any[]=[]
  rh: any[]=[]
  colombiaMayor: boolean = false
  sabeLeer: boolean = false
  viveSolo: boolean = false
  popupVisibleUbicacion: boolean = false
  popupVisibleCaracteristicas: boolean = false
  popupVisibleRecursos: boolean = false;
  /* Notificaciones */
  notificaciones: any[] = []

  /* pop-ups */


  constructor(private sharedService : SharedService, private affiliateService : AffiliateService) { }

  ngOnInit() {
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

  submit(e){
    console.log(e);

  }

  buttonOptionsUbicacion = {
    text: 'Ubicación',
    type: 'default',
    icon: 'fas fa-map-marker-alt',
    width: '200',
    useSubmitBehavior: false,

  }

  buttonOptionsCaracteristicas = {
    text: 'Características',
    type: 'default',
    icon: 'fas fa-info-circle',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleCaracteristicas = true
  }

  buttonOptionsRecursos = {
    text: 'Imágenes',
    type: 'default',
    icon: 'fas fa-images',
    width: '200',
    useSubmitBehavior: false,
    onClick: (data) => this.popupVisibleRecursos = true
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }




}
