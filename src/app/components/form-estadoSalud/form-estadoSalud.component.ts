import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import{ IEstadoSaludAfiliadoDTO } from "../../models/IEstadoSaludAfiliadoDTO"
import moment from 'moment'

@Component({
  selector: 'app-form-estadoSalud',
  templateUrl: './form-estadoSalud.component.html',
  styleUrls: ['./form-estadoSalud.component.scss']
})
export class FormEstadoSaludComponent implements OnInit {

  @Output() estadoSaludEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modoView: boolean = false
  @Input() estadosSaludAfiliado: IEstadoSaludAfiliadoDTO[]

  estadoSalud: IEstadoSaludAfiliadoDTO

  constructor() { }

  ngOnInit() {
    this.estadoSalud=new IEstadoSaludAfiliadoDTO()

  }

  agregarEstadoSalud(event) {

    /* console.log(this.estadoSalud); */


    if(this.estadosSaludAfiliado===undefined){
      this.estadosSaludAfiliado=[]
    }
    /* this.estadoSalud.fecha.setHours(0,0,0,0) */
    /* console.log(this.estadoSalud.fecha.getTime()); */
    if (this.estadosSaludAfiliado.map(e => moment(e.fecha).format('DD/MM/YYYY')).indexOf(moment({ ...this.estadoSalud }.fecha).format('DD/MM/YYYY')) === -1) {

      /* this.estadosSalud.push(this.estadoSalud) */
      this.estadoSaludEvent.emit([...this.estadosSaludAfiliado,{...this.estadoSalud}].sort((a, b) => (a.fecha > b.fecha) ? 1 : -1))
      /* console.log(this.estadosSalud); */
      this.estadoSalud = new IEstadoSaludAfiliadoDTO();
    }

  }
  quitarEstadoSalud(estadoSaludQuitar){

    this.estadosSaludAfiliado.splice(this.estadosSaludAfiliado.indexOf(estadoSaludQuitar) ,1);
    this.estadoSaludEvent.emit([...this.estadosSaludAfiliado])

  }

}
