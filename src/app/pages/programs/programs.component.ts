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

  
  
  ngOnInit(): void {
    this.listarProgramas();

  }

  inicializarPrograma(){
    delete this.programa.actividades;
    delete this.programa.color;
    delete this.programa.componentes;
    delete this.programa.created_at;
    delete this.programa.esClub;
    delete this.programa.estado;
    delete this.programa.id;
    delete this.programa.nombre;
    delete this.programa.nombreManual;
    delete this.programa.subindices;
    this.submenuVisible = false;
    this.botonCrearVisible = true;
    this.nuevoProgramaRead = false;
    this.submenuheight = 200;
  }

  inicializarSubindice(){
    delete this.subindice.created_at;
    delete this.subindice.estado;
    delete this.subindice.id;
    delete this.subindice.nombre;
    delete this.subindice.programa_Id;
  }

  inicializarComponente(){
    delete this.componente.created_at;
    delete this.componente.indicador;
    delete this.componente.estado;
    delete this.componente.id;
    delete this.componente.nombre;
    delete this.componente.programa_Id;
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

      console.log(this.programa);
    this.programa.estado = true;
    /* this.popupVisible = false; */
    this.currentPrograma = this.programa
    this.programaService.insertPrograma(this.programa).subscribe((res:IProgramaDTO) => {
      this.currentPrograma = res;
      this.isVisible = true;
      this.listarProgramas();
      this.listarComponentes(this.currentPrograma.id);
      this.listarSubindices(this.currentPrograma.id);
      this.showSubmenu();
    });
	}

  
  /* subindices */
  
  formSubindiceSubmit(e?:any) {
		if (e)
      		e.preventDefault();
    this.subindice.programa_Id = this.currentPrograma.id;
    this.subindice.estado = true;
    
    this.subindiceService.insertSubindice(this.subindice).subscribe((res:any) => {
      this.listarSubindices(this.currentPrograma.id);
      this.listarComponentes(this.currentPrograma.id);
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
    this.subindiceEdit.programa_Id = this.currentPrograma.id;

    this.subindiceService.editSubindice(this.subindiceEdit).subscribe((res:any) => {
      this.listarSubindices(this.subindiceEdit.programa_Id);
      this.listarComponentes(this.subindiceEdit.programa_Id);
      this.popupSubindiceEditVisible = false;
    });
	}
  /* delete subindice */
  deleteSubindice(subindiceDelete:ISubindiceDTO){
		this.subindiceDelete=subindiceDelete;
    console.log(subindiceDelete);
    debugger;
		this.showSubindiceDeletePopUp();
	}
  formSubindiceDelete() {
    this.subindiceService.deleteSubindice(this.subindiceDelete.id).subscribe((res:any) => {
      console.log(this.subindiceDelete);
      debugger;
      this.listarSubindices(this.subindiceDelete.programa_Id);
      this.listarComponentes(this.subindiceDelete.programa_Id);
      /* this.popupSubindiceDeleteVisible = false; */
    });
  }
  formSubindiceCancel(){
    this.popupSubindiceDeleteVisible=false;
  }
  /* componentes */
  formComponenteSubmit(e?:any) {
		if (e)
      		e.preventDefault();
    this.componente.programa_Id = this.currentPrograma.id;
    this.componente.estado = true;
    
    this.componenteService.insertComponente(this.componente).subscribe((res:any) => {
      this.listarComponentes(this.currentPrograma.id);
      this.listarSubindices(this.currentPrograma.id);
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
    this.componenteEdit.programa_Id = this.currentPrograma.id;

    this.componenteService.editComponente(this.componenteEdit).subscribe((res:any) => {
      this.listarSubindices(this.componenteEdit.programa_Id);
      this.listarComponentes(this.componenteEdit.programa_Id);
      this.popupComponenteEditVisible = false;
    });
	}

  /* delete subindice */
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

  showSubmenu(){
    this.submenuheight = 600;
    this.submenuVisible = true;
    this.botonCrearVisible = false;
    this.nuevoProgramaRead = true;
  }

}
