import { Component, OnInit } from '@angular/core';
import { IProgramaDTO } from '../../models/IProgramaDTO';
import { ProgramaService } from '../../services/programa.service';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  public titulo: string = ''
  programas: IProgramaDTO[] = []
  popupVisible: boolean = false;
  crud: any = {
    entidad: new IProgramaDTO(),
    accion: 'INSERT'
  }



  constructor(
    private programaService: ProgramaService,
    private sharedService: SharedService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.listarProgramas()
    this.iniciarTitulo()
  }

  private iniciarTitulo(){
    switch(this.crud.accion){
      case 'INSERT':
        this.titulo="Ingresar nuevo programa"
      break;
      case 'UPDATE':
        this.titulo="Editar programa"
      break;
      case 'VIEW':
        this.titulo="Detalles del programaa"
    }
  }

  listarProgramas(){
    this.programaService.programas().subscribe((response: any) => {
        this.programas = response;
        this.authService.setLoadingVisible(false)
      });
  }
  inicializarPrograma(){
    this.crud = {
      entidad: new IProgramaDTO(),
      accion: 'INSERT'
    }
  }
  crudEvento(e){
    switch (this.crud.accion) {
      case 'INSERT':
        this.programaService.insertPrograma(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Programa creado exitosamente', 'success')
          this.listarProgramas()
        })
      break;

      case 'UPDATE':
        this.programaService.editPrograma(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Programa actualizado exitosamente', 'success')
          this.listarProgramas()
        })
      break;
    }
    this.popupVisible=false


  }

  deletePrograma( programa : IProgramaDTO ) {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar el Programa ${programa.nombre}?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Mejor no`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.programaService.deletePrograma(programa.id).subscribe((res: any) => {

          this.sharedService.notify('Programa eliminado satisfactoriamente', 'success')
          this.listarProgramas();
        })
      }
    })
  }



  editPrograma(programa: IProgramaDTO){
    this.crud = {
      entidad: programa,
      accion: 'UPDATE'
    }
    this.popupVisible = true
  }

  detailsPrograma(programa: IProgramaDTO){
    this.crud = {
      entidad: programa,
      accion: 'VIEW'
    }
    this.popupVisible = true
  }

  showFormPrograma(){
    this.crud = {
      entidad: new IProgramaDTO(),
      accion: 'INSERT'
    }
    this.popupVisible = true
  }

}
