import { NgModule, Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { IActividadDTO } from 'src/app/models/IActividadDTO';
import { EstadoActividadService } from 'src/app/services/estadoActividad.service';
import { IUsuarioDTO } from 'src/app/models/IUsuarioDTO';
import { UsersService } from 'src/app/services/users.service';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';


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
	currentProgramDTO: IProgramaDTO;
	popupVisible: boolean = false;
	popupDetailsVisible: boolean = false;
	popupEditVisible:boolean=false;
	popupDeleteVisible:boolean=false;
  popupCheckVisible:boolean = false;
	isVisible: boolean = false;
	isEditVisible: boolean = false;
	isDeleteVisible: boolean = false;
  isCheckTrueVisible: boolean = false;
  isCheckFalseVisible: boolean = false;
	message = 'La actividad ha sido agregada exitosamente';
	messageEdit = 'La actividad ha sido editada exitosamente';
	messageDelete = 'La actividad ha sido eliminada exitosamente';
  messageCheckTrue = 'La actividad ha sido aprobada';
  messageCheckfalse = 'La actividad NO ha sido aprobada';
	type = 'success';
  typeDanger = 'danger';

	constructor(private activitiesService: ActivitiesService, private programaService: ProgramaService, private estadoActividadService: EstadoActividadService, private usuarioService: UsersService) { }

    actividades: any;
	actividad: IActividadDTO;
	actividadEdit:IActividadDTO;
	actividadDetails:IActividadDTO;
    actividadDelete:IActividadDTO;
    actividadCheck:IActividadDTO;
    actividad_id:number;

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
		text: 'Editar',
		type: 'default',
		icon: 'fa fa-edit',
		width: '200',
		useSubmitBehavior: true,

	}
	buttonOptionsClose = {
		text: 'salir',
		type: 'danger',
		icon: 'fa fa-window-close',
		width: '200',
		useSubmitBehavior: true

	}
  	buttonOptionsDelete = {
		text: 'SI',
		type: 'success',
		width: '200',
    	useSubmitBehavior: true


	}
  	buttonOptionsCancel = {
		text: 'NO',
		type: 'danger',
		width: '200',
    	useSubmitBehavior: true


	}

	ngOnInit(): void {
		this.listarActividades();
		this.listarProgramas();
		this.listarEstadosActividad();
		this.listarUsuarios();

		this.actividad = new IActividadDTO();
		this.actividadEdit = new IActividadDTO();
		this.actividadDetails = new IActividadDTO();
  		this.actividadDelete = new IActividadDTO();
  		this.actividadCheck = new IActividadDTO();
	}

	inicializarActividad(){
		delete this.actividad.created_at;
		delete this.actividad.descripcion;
		delete this.actividad.estadoActividad_Descripcion;
		delete this.actividad.estadoActividad_Id;
		delete this.actividad.fecha;
		delete this.actividad.id;
		delete this.actividad.indicador_Id;
		delete this.actividad.nombre;
		delete this.actividad.nombreComprobante;
		delete this.actividad.programa_nombre;
		delete this.actividad.subindice_Id;
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
  /* insert actividad */

	formSubmit(e?:any) {
		if (e)
      		e.preventDefault();
		this.actividad.nombreComprobante="indefinido";
		this.actividad.indicador_Id = 1;
    	this.actividad.estadoActividad_Id = 4;
		this.popupVisible = false;
		this.activitiesService.insertActividad(this.actividad).subscribe((res: any) => {
			this.isVisible = true;
			this.listarActividades();
      console.log(this.actividad)

		});
	}

  /* edit actividad */

  editActividad(actividadEdit:IActividadDTO){
		this.actividadEdit=actividadEdit;
		this.showEditPopUp();
	}

	formEdit(e?:any) {
		if (e)
      		e.preventDefault();
		this.actividad.nombreComprobante="indefinido";
		this.actividad.indicador_Id = 1;
		this.popupEditVisible = false;
		this.activitiesService.editActividad(this.actividadEdit).subscribe((res: any) => {
			this.isEditVisible = true;
			this.listarActividades();

		});
	}

  /* delete actividad */

  deleteActividad(actividadDelete:IActividadDTO){
    this.actividad_id=actividadDelete.id;
    this.showDeletePopUp();
  }

  formDelete(){
    this.activitiesService.deleteActividad(this.actividad_id).subscribe((res:any)=>{
      this.popupDeleteVisible=false;
      this.isDeleteVisible=true;
      this.listarActividades();
    })
  }

  formCancel(){
    this.popupDeleteVisible=false;
  }

  /* details actividad */

  detailsActividad(actividadDetails:IActividadDTO) {
		this.actividadDetails=actividadDetails;
		this.showDetailsPopUp();

	}

	formHide() {
		this.popupDetailsVisible=false;
	}

  /* check actividad */

  checkActividad(actividadCheck:IActividadDTO) {
    this.actividadCheck=actividadCheck;
    this.showCheckPopUp();
  }

  formCheckTrue() {
    this.actividadCheck.estadoActividad_Id=6
    this.popupCheckVisible = false;
    this.activitiesService.editActividad(this.actividadCheck).subscribe((res: any) => {
			this.isCheckTrueVisible = true;
			this.listarActividades();

		});
  }

  formCheckFalse() {
    this.actividadCheck.estadoActividad_Id=5
    this.popupCheckVisible = false;
    this.activitiesService.editActividad(this.actividadCheck).subscribe((res: any) => {
			this.isCheckFalseVisible = true;
			this.listarActividades();

		});
  }

  formCheckCancel() {
    this.popupCheckVisible = false;
  }






	getProgramBySelection(e: any) {
		if (!!e.selectedItem) {
			this.currentProgramDTO = this.programasDTO.find(x => x.id == e.selectedItem.id);
			this.actividad.programa_Id = e.selectedItem.id
		}
		else {
			this.currentProgramDTO = null;
			this.currentProgram = 0;
		}
	}

	showPopUp = () => this.popupVisible = true;
	showEditPopUp = () => this.popupEditVisible = true;
	showDetailsPopUp = () => this.popupDetailsVisible = true;
  showDeletePopUp= () => this.popupDeleteVisible = true;
  showCheckPopUp= () => this.popupCheckVisible = true;

}



