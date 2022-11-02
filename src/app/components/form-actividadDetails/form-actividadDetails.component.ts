import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges,OnChanges} from '@angular/core';
import { IActividadDTO } from '../../models/IActividadDTO';

@Component({
  selector: 'app-form-actividadDetails',
  templateUrl: './form-actividadDetails.component.html',
  styleUrls: ['./form-actividadDetails.component.css']
})
export class FormActividadDetailsComponent implements OnInit , OnChanges {

  @Input() actividad: IActividadDTO = new IActividadDTO()
  @Output() visibleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  buttonOptionsClose = {
		text: 'salir',
		type: 'danger',
		icon: 'fa fa-window-close',
		width: '200',
		useSubmitBehavior: true

	}

  ngOnInit() {
  }

  ngOnChanges(actividad:SimpleChanges) {

  }

  formHide() {
		this.visibleEvent.emit(false);
	}

}
