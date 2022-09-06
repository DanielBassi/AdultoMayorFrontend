import { Component, OnInit, OnDestroy} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private userService: UsersService) { }
  
  popupVisible: boolean = false;

  isVisible:boolean = false;
  message= 'El usuario ha sido agregado exitosamente';
  type= 'success';

  dataSource: any;
  user: any;
  buttonOptionsSave = {
    text: 'Guardar',
        type: 'success',
        icon: 'fa fa-save',
        width: '200',
        onClick: () => {
          this.user.estado = true;
          this.popupVisible = false;
          this.userService.insertUsuario(this.user).subscribe((res:any) => {
            this.isVisible = true;
            this.listarUsuarios();
        });
      },
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.userService
      .listUsuarios()
      .subscribe((response: any) => {
        this.dataSource = response;
      });
  }

  editarUsuario(){
    /* this.userService
      .editUsuario(usuario)
      .subscribe((response: any) => {
        this.listarUsuarios();

      }); */
      console.log("hola");
  }

  showPopUp = () => this.popupVisible = true;
  hidePopUp = () => this.popupVisible = false;
  showToast = () => this.isVisible = true;
  hideToast = () => this.isVisible= false;

  ngOnDestroy(): void {
    
  }
}
