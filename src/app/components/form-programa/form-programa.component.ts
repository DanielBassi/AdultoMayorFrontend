import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { IProgramaDTO } from '../../models/IProgramaDTO'
import { SharedService } from '../../services/shared.service'
import { ProgramaService } from '../../services/programa.service'
import { IManualDTO } from '../../models/IManualDTO';

@Component({
  selector: 'app-form-programa',
  templateUrl: './form-programa.component.html',
  styleUrls: ['./form-programa.component.css']
})
export class FormProgramaComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input() crud: any = {
    entidad: new IProgramaDTO(),
    accion: 'INSERT'
  }
  programas: IProgramaDTO[] = []
  modoView: boolean = false
  popupSubindiceVisible: boolean = false
  /* Notificaciones */
  notificaciones: any[] = []

  public componentes: any[] = []

  constructor(private programaService: ProgramaService,private sharedService: SharedService) { }

  ngOnInit() {
  }
  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.accion === 'VIEW'
  }

  AgregarComponente(){
    this.crud.entidad.componentes.push({
      nombre: '',
      indicadores: []
    })
  }

  RemoverComponente(data: any) {
    const index = this.crud.entidad.componentes.findIndex(f => f === data)
    this.crud.entidad.componentes.splice(index, 1)
  }

  RemoverIndicador(data: any) {
    const componente = this.crud.entidad.componentes.find(f => f.indicadores.find(find => find === data))
    const index = componente.indicadores.findIndex(find => find === data)
    componente.indicadores.splice(index, 1)
  }

  AgregarIndicador(data: any) {
    const componente = this.crud.entidad.componentes.find(f => f === data)
    componente.indicadores.push({
      nombre: ''
    })
  }

  subindiceEvent(subindices){
    this.crud.entidad.subindice = subindices
  }

  submit(event: Event) {
    event.preventDefault()
    this.crud.entidad.componentes = this.componentes
    this.crudEvent.emit({...this.crud})
    this.crud.entidad = new IProgramaDTO()
  }
  /* manual de usuario */

  addManual = (event) => this.crud.entidad.manuales = event

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }

  buttonOptionsComponente = {
    text: 'Componentes',
    type: 'success',
    icon: 'fa fa-plus-circle',
    width: '200',
    useSubmitBehavior: false,
    onclick:this.AgregarComponente()
  }


}
