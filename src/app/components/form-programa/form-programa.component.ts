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
  listaDeManuales: IManualDTO[];
  modoView: boolean = false
  titulo:string=""
  popupSubindiceVisible: boolean = false
  /* Notificaciones */
  notificaciones: any[] = []
  constructor(private programaService: ProgramaService,private sharedService: SharedService) { }

  ngOnInit() {
    this.iniciarTitulo()
  }
  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.accion === 'VIEW'
  }

  private iniciarTitulo(){
    switch(this.crud.accion){
      case 'INSERT':
        this.titulo="Ingresar nuevo programa"
      break;
      case 'UPDATE':
        this.titulo="Editar programa"
      break;
      case 'VIEW':
        this.titulo="Detalles del programaa"
    }
  }


  showSubindicePopUp(){
    this.popupSubindiceVisible=true
  }
  subindiceEvent(subindices){
    this.crud.entidad.subindice=subindices
  }
  submit(event: Event) {
    event.preventDefault()
    this.crudEvent.emit({...this.crud})
    this.crud.entidad = new IProgramaDTO()
  }
  /* manual de usuario */

  addManual(event){
    if (this.listaDeManuales==undefined){
      this.listaDeManuales=[]
    }

    if (this.listaDeManuales.length == 0) {

      /* console.log(event); */
      this.crud.entidad.manuales=event
      this.crud.entidad.manuales.programa_id=this.crud.entidad.id

      this.programaService.editPrograma(this.crud.entidad).subscribe((res:any) => {
        this.crud.entidad = res;
      });

      this.listaDeManuales.push(this.crud.entidad.manuales);
    }

    else {
      this.sharedService.notify("Debe eliminar el manual antes de ingresar uno nuevo","danger")
    }


  }

  deleteManual(event){
    this.crud.entidad.manuales=event;
    this.crud.entidad.guidManual="";
    this.crud.entidad.nombreManual="";
    this.listaDeManuales.pop();
    this.programaService.editPrograma(this.crud.entidad).subscribe((res:any) => {
      this.crud.entidad = res;
    });
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }


}
