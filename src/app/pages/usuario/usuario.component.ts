import { Component, OnInit } from '@angular/core';
import { IUsuarioDTO } from '../../models/IUsuarioDTO';
import { UsersService } from '../../services/users.service';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: IUsuarioDTO[] = []
  popupVisible: boolean = false;
  crud: any = {
    entidad: new IUsuarioDTO(),
    accion: 'INSERT'
  }
  constructor(private usersService: UsersService, private sharedService: SharedService) { }

  ngOnInit() {
    this.listarUsusarios()
  }

  listarUsusarios(){
    this.usersService.listUsuarios()
      .subscribe((response: any) => {
        this.usuarios = response;
      });
  }

  inicializarUsuario(){
    this.crud = {
      entidad: new IUsuarioDTO(),
      accion: 'INSERT'
    }
  }

  crudEvento(e){


    switch (this.crud.accion) {
      case 'INSERT':
        this.usersService.insertUsuario(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Usuario creado exitosamente', 'success')
          this.listarUsusarios()
        })
      break;

      case 'UPDATE':
        this.usersService.editUsuario(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Usuario actualizado exitosamente', 'success')
          this.listarUsusarios()
        })
      break;
    }
    this.popupVisible=false


  }

  deleteUsuario( usuario: IUsuarioDTO ) {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar el Usuario ${usuario.nombre}?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Mejor no`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.usersService.deleteUsuario(usuario.id).subscribe((res: any) => {

          this.sharedService.notify('Usuario eliminado satisfactoriamente', 'success')
          this.listarUsusarios();
        })
      }
    })
  }



  editUsuario( usuario: IUsuarioDTO ){
    this.crud = {
      entidad: usuario,
      accion: 'UPDATE'
    }
    this.popupVisible = true
  }

  detailsUsuario( usuario: IUsuarioDTO ){
    this.crud = {
      entidad: usuario,
      accion: 'VIEW'
    }
    this.popupVisible = true
  }

  showFormUsuario(){
    this.crud = {
      entidad: new IUsuarioDTO(),
      accion: 'INSERT'
    }
    this.popupVisible = true
  }

}
