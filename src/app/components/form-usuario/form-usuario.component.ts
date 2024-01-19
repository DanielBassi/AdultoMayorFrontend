import {
  Component,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { IUsuarioDTO } from '../../models/IUsuarioDTO';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() crud: any;
  roles: any;
  popupVisibleFirma: boolean = false;
  tiposIdentificacion: any;
  modoView: boolean = false;
  titulo: string = '';
  namePattern: any = /^[^0-9]+$/;
  popupSubindiceVisible: boolean = false;
  /* Notificaciones */
  notificaciones: any[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.listarRoles();
    this.listarTiposIdentificacion();
  }

  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.accion === 'VIEW';
  }

  listarRoles() {
    this.roles = this.usersService.listRoles();
  }
  listarTiposIdentificacion() {
    this.tiposIdentificacion = this.usersService.listTiposIdentificacion();
  }

  submit(event: Event) {
    event.preventDefault();
    this.crudEvent.emit({ ...this.crud });
    this.crud.entidad = new IUsuarioDTO();
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'success',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  };

  buttonOptionsFirma = {
    type: 'normal',
    icon: 'fa-solid fa-plus',
    useSubmitBehavior: false,
    onClick: () => (this.popupVisibleFirma = true),
  };

  firmaUsuarioEvent(event) {
    this.crud.entidad.firma = event;
    this.popupVisibleFirma = false;
  }

  handleButtonClick() {
    this.popupVisibleFirma = true;
  }

  reset: () => null;
}
