import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IComponenteDTO } from '../../models/IComponenteDTO';

import { IProgramaDTO } from '../../models/IProgramaDTO';
import { ISubindiceDTO } from '../../models/ISubindiceDTO';
import { ProgramaService } from '../../services/programa.service';
import { SubindiceService } from '../../services/subindice.service';
import { ComponenteService } from '../../services/componente.service';
import { IManualDTO } from '../../models/IManualDTO';
import { createLogicalAnd } from 'typescript';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit, OnDestroy {



  constructor(private programaService: ProgramaService, private subindiceService: SubindiceService, private componenteService: ComponenteService) {}

  popupVisible: boolean = false;
  popupDetailsVisible: boolean = false;
	popupEditVisible:boolean=false;
	popupDeleteVisible:boolean=false;

  popupSubindiceVisible: boolean = false;
  popupSubindiceDetailsVisible: boolean = false;
	popupSubindiceEditVisible:boolean=false;
	popupSubindiceDeleteVisible:boolean=false;

  popupSubindiceEditSecondaryVisible:boolean=false;

  popupComponenteVisible: boolean = false;
  popupComponenteDetailsVisible: boolean = false;
	popupComponenteEditVisible:boolean=false;
	popupComponenteDeleteVisible:boolean=false;

  submenuVisible: boolean = false;
  submenuDetailsVisible: boolean = false;
	submenuEditVisible:boolean=false;
	submenuDeleteVisible:boolean=false;
  submenuheight:number = 200;

  botonCrearVisible:boolean = true;
  nuevoProgramaRead:boolean = false;


  isVisible:boolean = false;
  isEditVisible: boolean = false;
	isDeleteVisible: boolean = false;
  message= 'El programa ha sido agregado exitosamente';
  messageEdit = 'El programa ha sido editado exitosamente';
	messageDelete = 'El programa ha sido eliminado exitosamente';
  type= 'success';

  subindices: ISubindiceDTO[];
  subindice:ISubindiceDTO;
  subindiceEdit:ISubindiceDTO;
  subindiceDetails:ISubindiceDTO;
  subindiceDelete:ISubindiceDTO;

  componentes: IComponenteDTO[];
  componente: IComponenteDTO;
  componenteEdit: IComponenteDTO;
  componenteDetails: IComponenteDTO;
  componenteDelete: IComponenteDTO;


  programas: IProgramaDTO[];
  programa:IProgramaDTO;
  programaEdit:IProgramaDTO;
  programaDetails:IProgramaDTO;
  programaDelete:IProgramaDTO;
  programa_id:number;

  manuales:IManualDTO[];

  currentPrograma:IProgramaDTO;
  currentProgramaEdit:IProgramaDTO;
  currentProgramaDetails:IProgramaDTO;
  currentProgramaDelete:IProgramaDTO;
  currentPrograma_id:number;

  value: any[]

  buttonOptionsNewPrograma = {
    text: 'Crear',
		type: 'success',
		width: '200',
		useSubmitBehavior: true,

	}
  buttonOptionsEditPrograma = {
    text: 'Actualizar',
		type: 'success',
		width: '200',
		useSubmitBehavior: true,

	}
  buttonOptionsNewSubindice = {
    text: 'Agregar subindice',
		type: 'success',
		icon: 'fa fa-plus',
		width: '200',
		useSubmitBehavior: true,

	}
  buttonOptionsNewComponente = {
    text: 'Agregar componente',
		type: 'success',
		icon: 'fa fa-plus',
		width: '200',
		useSubmitBehavior: true,

	}
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
		text: 'Salir',
		type: 'danger',
		icon: 'fa fa-window-close',
		width: '200',
		/* useSubmitBehavior: true */

	}
  	buttonOptionsDelete = {
		text: 'SI',
		type: 'success',
		width: '200',
    icon:'fa fa-check',
    useSubmitBehavior: true


	}
  	buttonOptionsCancel = {
		text: 'NO',
		type: 'danger',
		width: '200',
    icon: 'fa fa-window-close',
    useSubmitBehavior: true


	}



  ngOnInit(): void {
    this.listarProgramas();
    this.currentPrograma = new IProgramaDTO();

    this.subindice = new ISubindiceDTO();
    this.subindiceEdit = new ISubindiceDTO();
    this.subindiceDetails = new ISubindiceDTO();
    this.subindiceDelete = new ISubindiceDTO();

    this.programa = new IProgramaDTO();
    this.programaEdit = new IProgramaDTO();
    this.programaDetails = new IProgramaDTO();
    this.programaDelete = new IProgramaDTO();

    this.componente = new IComponenteDTO();
    this.componenteEdit = new IComponenteDTO();
    this.componenteDetails = new IComponenteDTO();
    this.componenteDelete = new IComponenteDTO();

    this.manuales= [];

    this.popupVisible = false;
    this.popupDetailsVisible = false;
    this.popupEditVisible=false;
    this.popupDeleteVisible=false;

    this.popupSubindiceVisible = false;
    this.popupSubindiceDetailsVisible = false;
    this.popupSubindiceEditVisible=false;
    this.popupSubindiceDeleteVisible=false;

    this.popupSubindiceEditSecondaryVisible=false;

    this.popupComponenteVisible = false;
    this.popupComponenteDetailsVisible = false;
    this.popupComponenteEditVisible=false;
    this.popupComponenteDeleteVisible=false;

    this.submenuVisible = false;
    this.submenuDetailsVisible = false;
    this.submenuEditVisible=false;
    this.submenuDeleteVisible=false;
    this.submenuheight = 200;

    this.botonCrearVisible = true;
    this.nuevoProgramaRead = false;


    this.isVisible = false;
    this.isEditVisible = false;
    this.isDeleteVisible = false;


  }

  inicializarPrograma(){
    this.programa= new IProgramaDTO();
    this.submenuVisible = false;
    this.botonCrearVisible = true;
    this.nuevoProgramaRead = false;
    this.submenuheight = 200;
  }

  inicializarSubindice(){
    this.subindice=new ISubindiceDTO();
  }

  inicializarComponente(){
    this.componente = new IComponenteDTO();
  }

  listarProgramas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.programas = response;
      });
  }

  listarSubindices(currentPrograma_id: number){

    this.subindiceService.
    listSubindicesByProgramaId(currentPrograma_id)
    .subscribe((response: any) => {
      this.subindices = response;
    });
  }

  listarComponentes(currentPrograma_id: number){
    this.componenteService.
    listComponentesByProgramaId(currentPrograma_id)
    .subscribe((response: any) => {
      this.componentes = response;
    });
  }
  /* programas */
  formSubmitNewPrograma(e?:any) {
		if (e)
      e.preventDefault();
    this.programa.estado = true;
    /* this.popupVisible = false; */
    this.currentPrograma = this.programa
    this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
      this.currentPrograma = res;
      this.isVisible = true;
      this.listarProgramas();
      this.listarComponentes(this.currentPrograma.id);
      this.listarSubindices(this.currentPrograma.id);
      this.showSubmenu();
    });
	}
  /* edit programa */
  editPrograma(programaEdit: IProgramaDTO){
		this.programaEdit=programaEdit;
    this.currentProgramaEdit=programaEdit;
		this.showEditPopUp();
    this.listarComponentes(this.programaEdit.id);
    this.listarSubindices(this.programaEdit.id);
	}

  formEditPrograma(e?:any) {
		if (e)
      e.preventDefault();

    this.programaService.editPrograma(this.programaEdit).subscribe((res:any) => {
      this.currentProgramaEdit = res;
      this.isEditVisible = true;
      this.listarProgramas();
      this.listarComponentes(this.currentProgramaEdit.id);
      this.listarSubindices(this.currentProgramaEdit.id);
    });
	}
  /* delete programa */
  deletePrograma(programaDelete: IProgramaDTO){
    this.programaDelete=programaDelete;
    this.showDeletePopUp();
  }

  formDeletePrograma(){
    this.programaService.deletePrograma(this.programaDelete.id).subscribe((res:any)=>{
      this.popupDeleteVisible=false;
      this.isDeleteVisible=true;
      this.listarProgramas();
    })
  }

  formCancel(){
    this.popupDeleteVisible=false;
  }

/* manual de usuario */

  addManual(event){

    console.log(event);

  }

  /* subindices */

  formSubindiceSubmit(e?:any) {
		if (e)
      		e.preventDefault();
    if (this.currentPrograma.id!=0){
      this.subindice.programa_Id = this.currentPrograma.id;
    }
    else{
      this.subindice.programa_Id = this.currentProgramaEdit.id;
    }
    this.subindice.estado = true;

    this.subindiceService.insertSubindice(this.subindice).subscribe((res:any) => {
      this.listarSubindices(this.subindice.programa_Id);
      this.listarComponentes(this.subindice.programa_Id);
      this.popupSubindiceVisible = false;
    });
	}
 /* edit subindice */
  editSubindice(subindiceEdit: ISubindiceDTO){
		this.subindiceEdit=subindiceEdit;
		this.showSubindiceEditPopUp();
	}

  formSubindiceEdit(e?:any) {
		if (e)
      		e.preventDefault();

    this.subindiceService.editSubindice(this.subindiceEdit).subscribe((res:any) => {
      this.listarSubindices(this.subindiceEdit.programa_Id);
      this.listarComponentes(this.subindiceEdit.programa_Id);
      this.popupSubindiceEditVisible = false;
    });
	}
  /* delete subindice */
  deleteSubindice(subindiceDelete:ISubindiceDTO){
		this.subindiceDelete=subindiceDelete;
		this.showSubindiceDeletePopUp();
	}

  formSubindiceDelete() {
    console.log(this.subindiceDelete.id);

    this.subindiceService.deleteSubindice(this.subindiceDelete.id).subscribe((res:any) => {
      let x = res;

      this.listarSubindices(this.subindiceDelete.programa_Id);
      this.listarComponentes(this.subindiceDelete.programa_Id);
      this.popupSubindiceDeleteVisible = false;

    });



  }
  formSubindiceCancel(){
    this.popupSubindiceDeleteVisible=false;
  }
  /* componentes */
  formComponenteSubmit(e?:any) {
		if (e)
      		e.preventDefault();
    if (this.currentPrograma.id!=0){
      this.componente.programa_Id = this.currentPrograma.id;
      debugger;
    }
    else{
      this.componente.programa_Id = this.currentProgramaEdit.id;
    }

    this.componente.estado = true;

    this.componenteService.insertComponente(this.componente).subscribe((res:any) => {
      this.listarComponentes(this.componente.programa_Id);
      this.listarSubindices(this.componente.programa_Id);
      this.popupComponenteVisible = false;
    });
	}
  /* edit componente */
  editComponente(componenteEdit: IComponenteDTO){
		this.componenteEdit=componenteEdit;
		this.showComponenteEditPopUp();
	}

  formComponenteEdit(e?:any) {
		if (e)
      		e.preventDefault();

    this.componenteService.editComponente(this.componenteEdit).subscribe((res:any) => {
      this.listarSubindices(this.componenteEdit.programa_Id);
      this.listarComponentes(this.componenteEdit.programa_Id);
      this.popupComponenteEditVisible = false;
    });
	}

  /* delete componente */
  deleteComponente(componenteDelete:IComponenteDTO){
		this.componenteDelete=componenteDelete;
		this.showComponenteDeletePopUp();
	}
  formComponenteDelete() {
    this.componenteService.deleteComponente(this.componenteDelete.id).subscribe((res:any) => {
      this.listarSubindices(this.componenteDelete.programa_Id);
      this.listarComponentes(this.componenteDelete.programa_Id);
      /* this.popupComponenteDeleteVisible = false; */
    });
  }
  formComponenteCancel(){
    this.popupComponenteDeleteVisible=false;
  }

  /* details componente */
  detailsComponente(componenteDetails:IComponenteDTO) {
		this.componenteDetails=componenteDetails;
		this.showComponenteDetailsPopUp();

	}

  formHideComponente() {
		this.popupComponenteDetailsVisible=false;
	}



  rowValidating(event: any){}

  editorPreparing(event: any){}

  ngOnDestroy(): void {}

  showPopUp = () => this.popupVisible = true;
  showEditPopUp = () => this.popupEditVisible = true;
	showDetailsPopUp = () => this.popupDetailsVisible = true;
  showDeletePopUp= () => this.popupDeleteVisible = true;

  showSubindicePopUp = () => this.popupSubindiceVisible = true;
  showSubindiceEditPopUp = () => this.popupSubindiceEditVisible = true;
	showSubindiceDetailsPopUp = () => this.popupSubindiceDetailsVisible = true;
  showSubindiceDeletePopUp= () => this.popupSubindiceDeleteVisible = true;

  showSubindiceSecondaryPopUp = () => this.popupSubindiceEditSecondaryVisible = true;

  showComponentePopUp = () => this.popupComponenteVisible = true;
  showComponenteEditPopUp = () => this.popupComponenteEditVisible = true;
	showComponenteDetailsPopUp = () => this.popupComponenteDetailsVisible = true;
  showComponenteDeletePopUp= () => this.popupComponenteDeleteVisible = true;

  showSubmenu(){
    this.submenuheight = 600;
    this.submenuVisible = true;
    this.botonCrearVisible = false;
    this.nuevoProgramaRead = true;
  }

}
