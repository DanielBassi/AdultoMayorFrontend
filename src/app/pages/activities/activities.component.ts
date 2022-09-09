import { NgModule, Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DxSelectBoxModule, DxDataGridModule, DxTextBoxModule,DxTemplateModule} from 'devextreme-angular';
import { IActividadDTO } from 'src/app/models/IActividadDTO';
import { EstadoActividadService } from 'src/app/services/estadoActividad.service';
import { IUsuarioDTO } from 'src/app/models/IUsuarioDTO';
import { UsersService } from 'src/app/services/users.service';


if (!/localhost/.test(document.location.host)) {
	enableProdMode();
}

@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.css'],
	providers: [ActivitiesService]
})
export class ActivitiesComponent implements OnInit {

	/* @ViewChild('filterTxt', { static: false }) filterMedicineTextBox: DxSelectBoxComponent; */

	search: boolean = true;
	currentProgram: number;
	currentProgramDTO: any;

	popupVisible: boolean = false;
	popupEditVisible:boolean=false;
	isVisible: boolean = false;
	isEditVisible: boolean = false;
	isDeleteVisible: boolean = false;
	message = 'La actividad ha sido agregada exitosamente';
	messageEdit = 'La actividad ha sido editada exitosamente';
	messageDelete = 'La actividad ha sido eliminada exitosamente';
	type = 'success';

	constructor(private activitiesService: ActivitiesService, private programaService: ProgramaService, private estadoActividadService: EstadoActividadService, private usuarioService: UsersService) { }
	actividades: any;
	actividad: IActividadDTO;
	actividadEdit:IActividadDTO;
	usuario: IUsuarioDTO;
	estados: any;
	programasDTO: any;
	subindicesDTO: any;
	maxLength: null;
	value: string;
	
	buttonOptionsSave = {
		text: 'Guardar',
		type: 'success',
		icon: 'fa fa-save',
		width: '200',
		useSubmitBehavior: true,
		
	}
	buttonOptionsEdit = {
		text: 'Guardar',
		type: 'success',
		icon: 'fa fa-save',
		width: '200',
		useSubmitBehavior: true,
		
	}

	ngOnInit(): void {
		this.listarActividades();
		this.listarProgramas();
		this.listarEstadosActividad();
		this.listarUsuarios();
	}

	listarProgramas() {
		this.programaService
			.programas()
			.subscribe((response: any) => {
				this.programasDTO = response;
			});
	}
	listarActividades() {
		this.activitiesService
			.actividades()
			.subscribe((response: any) => {
				this.actividades = response;
			});
	}
	listarEstadosActividad(){
		this.estadoActividadService
			.estadosActividad()
			.subscribe((response: any)=>{
			this.estados = response;
		});
	}
	listarUsuarios(){
		this.usuarioService
			.listUsuarios()
			.subscribe((response:any)=>{
				this.usuario=response;
			});
	}
	formSubmit(e?:any) {
		if (e)
      		e.preventDefault();
		this.actividad.nombreComprobante="indefinido";
		this.actividad.indicador_Id = 1;
		this.popupVisible = false;
		this.activitiesService.insertActividad(this.actividad).subscribe((res: any) => {
			this.isVisible = true;
			this.listarActividades();
			 
		});	
	}
	formEdit(e?:any) {
		if (e)
      		e.preventDefault();
		this.actividad.nombreComprobante="indefinido";
		this.actividad.indicador_Id = 1;
		this.popupEditVisible = false;
		this.activitiesService.EditActividad(this.actividadEdit).subscribe((res: any) => {
			this.isEditVisible = true;
			this.listarActividades();
			 
		});	
	}
	editActividad(actividadEdit:IActividadDTO){
		this.actividadEdit=actividadEdit
		this.showEditPopUp()
	}
	
	getProgramBySelection(e: any) {
		if (!!e.selectedItem) {
			this.currentProgramDTO = this.programasDTO.find(x => x.id == e.selectedItem.id);
			this.actividad.programa_Id = e.selectedItem.id
		}
		else {
			this.currentProgramDTO = {};
			this.currentProgram = null;
		}
	}

	logEvent(eventName) {
		console.log(eventName.data);

	}
	showPopUp = () => this.popupVisible = true;
	showEditPopUp = () => this.popupEditVisible = true;
	
	

}
@NgModule({
	imports: [
		DxTextBoxModule,
		DxTemplateModule,
		BrowserModule,
		DxSelectBoxModule,
		DxDataGridModule
	],
	declarations: [],
	bootstrap: [ActivitiesComponent]
})

export class ActivitiesModule { }

platformBrowserDynamic().bootstrapModule(ActivitiesModule);


