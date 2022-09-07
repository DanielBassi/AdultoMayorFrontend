import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';
import { ProgramaService } from 'src/app/services/programa.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit, OnDestroy {
  
  

  constructor(private programaService: ProgramaService) {}

  programasDTO: any;
  popupVisible: boolean;
  isVisible: boolean;
  programa:IProgramaDTO;
  buttonOptionsSave = {
      text: 'Guardar',
      type: 'success',
      icon: 'fa fa-save',
      width: '200',
      onClick: () => {
        this.programa.estado = true;
        this.programa.color= "blue"
        this.popupVisible = false;
        this.programaService.insertPrograma(this.programa).subscribe((res:any) => {
          this.isVisible = true;
          this.listarProgramas();
        });
      },
  }
  buttonOptionsNewComponent = {
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
  }
  ngOnInit(): void {
    this.listarProgramas();
    this.popupVisible=false;
  }

  listarProgramas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.programasDTO = response;
      });
  }

  rowValidating(event: any){
    
  }

  editorPreparing(event: any){
    
  }

  ngOnDestroy(): void {
    
  }
  showPopUp = () => this.popupVisible = true;
  hidePopUp = () => this.popupVisible = false;
  showToast = () => this.isVisible = true;
  hideToast = () => this.isVisible= false;

}
