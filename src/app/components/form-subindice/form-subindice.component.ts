import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import{ ISubindiceDTO } from "../../models/ISubindiceDTO"

@Component({
  selector: 'app-form-subindice',
  templateUrl: './form-subindice.component.html',
  styleUrls: ['./form-subindice.component.css']
})
export class FormSubindiceComponent implements OnInit {
  @Output() subindiceEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modoView: boolean = false
  @Input() subindices: ISubindiceDTO[]

  subindice:ISubindiceDTO

  constructor() { }

  ngOnInit() {
    this.subindice = new ISubindiceDTO()
  }

  agregarSubindice(event) {
    event.preventDefault()
    if(this.subindices===undefined){
      this.subindices=[]
    }
    this.subindices.push(this.subindice)
    this.subindiceEvent.emit([...this.subindices,{...this.subindice}])
      this.subindice = new ISubindiceDTO();
    /* if (this.subindices.map(e => e.nombre).indexOf({ ...this.subindice }.nombre) === -1) {

      this.subindiceEvent.emit([...this.subindices,{...this.subindice}])
      this.subindice = new ISubindiceDTO();
    } */

  }
  quitarSubindice(subindiceQuitar){

    this.subindices.splice(this.subindices.indexOf(subindiceQuitar) ,1);
    this.subindiceEvent.emit([...this.subindices])

  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  }

}
