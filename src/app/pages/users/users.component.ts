import { Component, OnInit, OnDestroy} from '@angular/core';
import { IUsuarioDTO } from 'src/app/models/IUsuarioDTO';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private userService: UsersService) { }
  
  popupVisible: boolean = false;
  popupDetailsVisible: boolean = false;
	popupEditVisible:boolean=false;
	popupDeleteVisible:boolean=false;
  isVisible:boolean = false;
  isEditVisible: boolean = false;
	isDeleteVisible: boolean = false;
  message= 'El usuario ha sido agregado exitosamente';
  messageEdit = 'El usuario ha sido editado exitosamente';
	messageDelete = 'El usuario ha sido eliminado exitosamente';
  type= 'success';
  roles:any;
  tiposIdentificacion:any;
  password:any ='';
  namePattern: any = /^[^0-9]+$/;

  usuarios: any;
  usuario: IUsuarioDTO;
  usuarioEdit:IUsuarioDTO;
  usuarioDetails:IUsuarioDTO;
  usuarioDelete:IUsuarioDTO;
  usuario_id:number;
  
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
    this.listarUsuarios();
    this.listarRoles();
    this.listarTiposIdentificacion();
  }

  listarUsuarios(){
    this.userService
      .listUsuarios()
      .subscribe((response: any) => {
        this.usuarios = response;
      });
  }
  listarRoles(){
    this.roles=this.userService
      .listRoles();
      
  }
  listarTiposIdentificacion(){
    this.tiposIdentificacion=this.userService
      .listTiposIdentificacion()
      
  }
  formSubmit(e?:any) {
		if (e)
      		e.preventDefault();   
    this.usuario.estado = true;
		this.popupVisible = false;
		this.userService.insertUsuario(this.usuario).subscribe((res:any) => {
      this.isVisible = true;
      this.listarUsuarios();
  });
	}
  formEdit(e?:any) {
		if (e)
      		e.preventDefault();
    this.usuario.estado = true;
		this.popupEditVisible = false;
    this.userService.editUsuario(this.usuarioEdit).subscribe((response: any) => {
        this.isEditVisible = true;
        this.listarUsuarios();

      });
	}
  formHide() {
		this.popupDetailsVisible=false;
	}
  formDelete(){
    this.userService.deleteUsuario(this.usuario_id).subscribe((res:any)=>{
      this.popupDeleteVisible=false;
      this.isDeleteVisible=true;
      this.listarUsuarios();
    })
  }
  formCancel(){
    this.popupDeleteVisible=false;
  }
  editUsuario(usuarioEdit:IUsuarioDTO){
		this.usuarioEdit=usuarioEdit;
		this.showEditPopUp();
	}
  detailsUsuario(usuarioDetails:IUsuarioDTO) {
		this.usuarioDetails=usuarioDetails;
		this.showDetailsPopUp();
		
	}
  deleteUsuario(usuarioDelete:IUsuarioDTO){
    this.usuario_id=usuarioDelete.id;
    this.showDeletePopUp();
  }
  

  showPopUp = () => this.popupVisible = true;
	showEditPopUp = () => this.popupEditVisible = true;
	showDetailsPopUp = () => this.popupDetailsVisible = true;
  showDeletePopUp= () => this.popupDeleteVisible = true;

  ngOnDestroy(): void {
    
  }
}
