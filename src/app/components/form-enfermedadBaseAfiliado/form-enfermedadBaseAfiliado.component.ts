import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import moment from 'moment'
import { IEnfermedadBaseAfiliadoDTO } from '../../models/IEnfermedadBaseAfiliadoDTO'

@Component({
  selector: 'app-form-enfermedadBaseAfiliado',
  templateUrl: './form-enfermedadBaseAfiliado.component.html',
  styleUrls: ['./form-enfermedadBaseAfiliado.component.css']
})
export class FormEnfermedadBaseAfiliadoComponent implements OnInit {
  @Output() enfermedadEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modoView: boolean = false
  @Input() enfermedadesBaseAfiliado: IEnfermedadBaseAfiliadoDTO[]

  enfermedadBaseAfiliado: IEnfermedadBaseAfiliadoDTO

  constructor() { }

  ngOnInit() {
    this.enfermedadBaseAfiliado= new IEnfermedadBaseAfiliadoDTO()
  }

  agregarEnfermedad(event){
    if(this.enfermedadesBaseAfiliado===undefined){
      this.enfermedadesBaseAfiliado=[]
    }
    if(this.enfermedadesBaseAfiliado.map(e => moment(e.fecha).format('DD/MM/YYYY')).indexOf(moment({ ...this.enfermedadBaseAfiliado }.fecha).format('DD/MM/YYYY')) === -1){
      this.enfermedadEvent.emit([...this.enfermedadesBaseAfiliado,{...this.enfermedadBaseAfiliado}].sort((a, b) => (a.fecha > b.fecha) ? 1 : -1))
      this.enfermedadBaseAfiliado = new IEnfermedadBaseAfiliadoDTO();
    }
  }
  quitarEnfermedad(enfermedadQuitar){
    this.enfermedadesBaseAfiliado.splice(this.enfermedadesBaseAfiliado.indexOf(enfermedadQuitar),1);
    this.enfermedadEvent.emit([...this.enfermedadesBaseAfiliado])
  }
}
