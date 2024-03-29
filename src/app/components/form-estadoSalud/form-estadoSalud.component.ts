import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEstadoSaludAfiliadoDTO } from '../../models/IEstadoSaludAfiliadoDTO';
import moment from 'moment';

@Component({
  selector: 'app-form-estadoSalud',
  templateUrl: './form-estadoSalud.component.html',
  styleUrls: ['./form-estadoSalud.component.scss'],
})
export class FormEstadoSaludComponent implements OnInit {
  @Output() estadoSaludEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modoView: boolean = false;
  @Input() estadosSaludAfiliado: IEstadoSaludAfiliadoDTO[];

  estadoSalud: IEstadoSaludAfiliadoDTO;

  constructor() {}

  ngOnInit() {
    this.estadoSalud = new IEstadoSaludAfiliadoDTO();
  }

  agregarEstadoSalud(event) {
    if (this.estadosSaludAfiliado === undefined) {
      this.estadosSaludAfiliado = [];
    }
    if (
      this.estadoSalud.estatura ||
      this.estadoSalud.peso ||
      (this.estadoSalud.presionSistolica && this.estadoSalud.presionDiastolica)
    ) {
      this.estadoSalud.presionArterial = `${this.estadoSalud.presionSistolica}/${this.estadoSalud.presionDiastolica}`;

      this.estadoSaludEvent.emit(
        [...this.estadosSaludAfiliado, { ...this.estadoSalud }].sort((a, b) =>
          a.fecha > b.fecha ? 1 : -1
        )
      );
      this.estadoSalud = new IEstadoSaludAfiliadoDTO();
    }
  }
  quitarEstadoSalud(estadoSaludQuitar) {
    this.estadosSaludAfiliado.splice(
      this.estadosSaludAfiliado.indexOf(estadoSaludQuitar),
      1
    );
    this.estadoSaludEvent.emit([...this.estadosSaludAfiliado]);
  }
}
