import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { IProgramaDTO } from '../../models/IProgramaDTO'
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-form-programa',
  templateUrl: './form-programa.component.html',
  styleUrls: ['./form-programa.component.css']
})
export class FormProgramaComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input() crud: any = { entidad: new IProgramaDTO(), accion: 'INSERT' }
  modoView: boolean = false

  constructor() { }

  ngOnInit() { }

  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.accion === 'VIEW'
  }

  private ValidarDatosEmitir(): any {
    if(this.crud.entidad?.nombre?.length < 1) return notify('El Programa debe de tener un Nombre.', 'error')
    if(this.crud.entidad?.color?.length < 1) return notify('El Programa debe de tener un Color.', 'error')
    if(this.crud.entidad?.manuales?.base64 === undefined && this.crud.accion === 'INSERT') return notify('El Programa debe de tener un Manual.', 'error')
    if(this.crud.entidad?.componentes?.length < 1) return notify('El Programa debe de tener al menos un Componente.', 'error')
    if(this.crud.entidad?.componentes.some(some => some.nombre.length < 1)) return notify('Todos los Componentes de un Programa deben de tener un Nombre.', 'error')
    if(this.crud.entidad?.componentes.some(some => some.indicadores.length < 1)) return notify('Todos los Componentes de un Programa deben de tener por lo menos un Indicador.', 'error')
    if(this.crud.entidad?.componentes.some(c => c.indicadores.some(i => i.nombre.length < 1))) return notify('Todos los Indicadores de los Componentes deben de llevar un Nombre', 'error')

    return "ACCEPT"
  }

  public AgregarComponente(){
    this.crud.entidad.componentes.push({
      nombre: '',
      indicadores: []
    })
  }

  public RemoverComponente(data: any) {
    const index = this.crud.entidad.componentes.findIndex(f => f === data)
    this.crud.entidad.componentes.splice(index, 1)
  }

  public RemoverIndicador(data: any) {
    const componente = this.crud.entidad.componentes.find(f => f.indicadores.find(find => find === data))
    const index = componente.indicadores.findIndex(find => find === data)
    componente.indicadores.splice(index, 1)
  }

  public AgregarIndicador(data: any) {
    const componente = this.crud.entidad.componentes.find(f => f === data)
    componente.indicadores.push({
      nombre: ''
    })
  }

  public addManual = (event) => this.crud.entidad.manuales = event

  public submit(event: Event) {
    event.preventDefault()

    if(this.ValidarDatosEmitir() != "ACCEPT") return

    this.crudEvent.emit({...this.crud})
    this.crud.entidad = new IProgramaDTO()
  }

  public buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }

  public buttonOptionsComponente = {
    text: 'Componentes',
    type: 'success',
    icon: 'fa fa-plus-circle',
    width: '200',
    useSubmitBehavior: false,
    onClick: (e) => this.AgregarComponente()
  }


}
