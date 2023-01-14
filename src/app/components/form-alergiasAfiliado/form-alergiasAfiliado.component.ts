import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IAlergiasAfiliadoDTO } from '../../models//IAlergiasAfiliadoDTO';
import moment from 'moment'
@Component({
  selector: 'app-form-alergiasAfiliado',
  templateUrl: './form-alergiasAfiliado.component.html',
  styleUrls: ['./form-alergiasAfiliado.component.css']
})
export class FormAlergiasAfiliadoComponent implements OnInit {
  @Output() alergiaEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modoView: boolean = false
  @Input() alergiasAfiliado: IAlergiasAfiliadoDTO[]

  alergiaAfiliado: IAlergiasAfiliadoDTO

  constructor() { }

  ngOnInit() {
    this.alergiaAfiliado = new IAlergiasAfiliadoDTO()
  }

  agregarAlergia(event){
    if(this.alergiasAfiliado===undefined){
      this.alergiasAfiliado=[]
    }

    if (this.alergiasAfiliado.map(e => moment(e.fecha).format('DD/MM/YYYY')).indexOf(moment({ ...this.alergiaAfiliado }.fecha).format('DD/MM/YYYY')) === -1) {

      this.alergiaEvent.emit([...this.alergiasAfiliado,{...this.alergiaAfiliado}].sort((a, b) => (a.fecha > b.fecha) ? 1 : -1))
      this.alergiaAfiliado = new IAlergiasAfiliadoDTO();
    }

  }

  quitarAlergia(alergiaQuitar){
    this.alergiasAfiliado.splice(this.alergiasAfiliado.indexOf(alergiaQuitar),1);
    this.alergiaEvent.emit([...this.alergiasAfiliado])
  }

}
