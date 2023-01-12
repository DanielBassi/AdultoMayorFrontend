import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import{ IEstadoSaludAfiliadoDTO } from "../../models/IEstadoSaludAfiliadoDTO"
import Swal from 'sweetalert2'
import moment from 'moment'

@Component({
  selector: 'app-form-estadoSalud',
  templateUrl: './form-estadoSalud.component.html',
  styleUrls: ['./form-estadoSalud.component.css']
})
export class FormEstadoSaludComponent implements OnInit {

  @Output() estadoSaludEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() popupEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() modoView: boolean = false
  @Input() estadosSalud: IEstadoSaludAfiliadoDTO[] = []

  estadoSalud: IEstadoSaludAfiliadoDTO
  editableDiscapacidad:boolean=false

  constructor() { }

  buttonOptionsAgregarEstadoSalud = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: false

  }

  buttonOptionsClose = {
    text: 'Cerrar',
    type: 'normal',
    icon: 'fas fa-window-close',
    width: '200',
    onClick: (data) => this.popupEvent.emit(false)
  };

  ngOnInit() {
    this.estadoSalud=new IEstadoSaludAfiliadoDTO()

  }

  /* agregarEstadoSalud(e){
    this.estadoSaludEvent.emit(this.estadoSalud)
  } */
  agregarEstadoSalud(event) {
    console.log(this.estadoSalud);


    if(this.estadosSalud===undefined){
      this.estadosSalud=[]
    }
    /* this.estadoSalud.fecha.setHours(0,0,0,0) */
    console.log(this.estadoSalud.fecha.getTime());

    if (this.estadosSalud.map(e => moment(e.fecha).format('DD/MM/YYYY')).indexOf(moment({ ...this.estadoSalud }.fecha).format('DD/MM/YYYY')) === -1) {
      this.estadosSalud.push(this.estadoSalud)
      this.estadoSaludEvent.emit(this.estadosSalud)
      console.log(this.estadosSalud);
    }

    this.estadoSalud = new IEstadoSaludAfiliadoDTO();
  }
  quitarEstadoSalud(estadoSaludQuitar){

    this.estadosSalud.splice(this.estadosSalud.indexOf(estadoSaludQuitar) ,1);
    this.estadoSaludEvent.emit([...this.estadosSalud])

    /* Swal.fire({
      title: `¿Estás seguro que deseas eliminar la fecha (${moment(estadoSaludQuitar.fecha).format('DD/MM/YYYY')})?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.estadosSalud.splice(this.estadosSalud.indexOf(estadoSaludQuitar) ,1);
        this.estadoSaludEvent.emit([...this.estadosSalud])
      }
    }) */

  }

  presentaDiscapacidad(e){
    console.log(e);
  }



}
