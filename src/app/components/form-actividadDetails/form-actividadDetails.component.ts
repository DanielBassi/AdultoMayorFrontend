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

  popupVisibleAsistencia:boolean=false
  popupVisibleEvidencia:boolean=false

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

  showPopUp(){
    this.popupVisibleAsistencia=true
  }

  showPopUpEvidencias(){
    this.popupVisibleEvidencia=true
  }

  ngOnChanges(actividad:SimpleChanges) {
  }

  formHide() {
		this.visibleEvent.emit(false);
	}

}
