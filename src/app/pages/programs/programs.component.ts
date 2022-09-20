import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IComponenteDTO } from 'src/app/models/IComponenteDTO';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';
import { ISubindiceDTO } from 'src/app/models/ISubindiceDTO';
import { ProgramaService } from 'src/app/services/programa.service';
import { SubindiceService } from 'src/app/services/subindice.service';
import { ComponenteService } from 'src/app/services/componente.service';

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

  popupComponenteVisible: boolean = false;
  popupComponenteDetailsVisible: boolean = false;
	popupComponenteEditVisible:boolean=false;
	popupComponenteDeleteVisible:boolean=false;

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

  currentPrograma:IProgramaDTO;
  currentProgramaEdit:IProgramaDTO;
  currentProgramaDetails:IProgramaDTO;
  currentProgramaDelete:IProgramaDTO;
  currentPrograma_id:number;

  buttonOptionsNewPrograma = {
    text: 'crear',
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

  buttonOptionsSaves = {
      text: 'Guardar',
      type: 'success',
      icon: 'fa fa-save',
      width: '200',
      onClick: () => {
        debugger;
        this.programa.estado = true;
        this.popupVisible = false;
        this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
          this.isVisible = true;
          this.listarProgramas();
        });
      },
  }
  /* buttonOptionsNewComponent = {
    text: 'Agregar Componente',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    onClick: () => {
      this.programa.estado = true;
      this.popupVisible = false;
      this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
        this.isVisible = true;
        this.listarProgramas();
      });
    },
  }
  buttonOptionsEditComponent = {
    text: 'Editar',
    type: 'default',
    width: '100',
    onClick: () => {
      this.programa.estado = true;
      this.popupVisible = false;
      this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
        this.isVisible = true;
        this.listarProgramas();
      });
    },
  }
  buttonOptionsDeleteComponent = {
    text: 'Eliminar',
    type: 'danger',
    width: '100',
    onClick: () => {
      this.programa.estado = true;
      this.popupVisible = false;
      this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
        this.isVisible = true;
        this.listarProgramas();
      });
    },
  } */
  ngOnInit(): void {
    this.listarProgramas();

  }

  listarProgramas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.programas = response;
      });
  }

  listarSubindices(){
    this.subindiceService.
    listSubindices()
    .subscribe((response: any) => {
      this.subindices = response;
    });
  }

  listarComponentes(){
    this.componenteService.
    listComponentes()
    .subscribe((response: any) => {
      this.componentes = response;
    });
  }
  formSubmit(e?:any) {
		if (e)
      e.preventDefault();

      console.log(this.programa);
    this.programa.estado = true;
    /* this.popupVisible = false; */
    this.currentPrograma = this.programa
    this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
      this.isVisible = true;
      this.listarProgramas();
    });
	}
  /* subindices */

  formSubindiceSubmit(e?:any) {
		if (e)
      		e.preventDefault();
    this.subindice.programa_Id = 1;
    this.subindice.estado = true;
    this.popupSubindiceVisible = false;
    this.subindiceService.insertSubindice(this.subindice).subscribe((res:any) => {
      this.listarSubindices();
    });
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

  showComponentePopUp = () => this.popupComponenteVisible = true;
  showComponenteEditPopUp = () => this.popupComponenteEditVisible = true;
	showComponenteDetailsPopUp = () => this.popupComponenteDetailsVisible = true;
  showComponenteDeletePopUp= () => this.popupComponenteDeleteVisible = true;

}
