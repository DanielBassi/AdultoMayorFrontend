import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo:'Usuarios', url:'users',icono:'nav-icon fa fa-users'},
      {titulo:'Programas', url:'programs',icono:'nav-icon fa fa-cogs'},
      {titulo:'Actividades', url:'activities',icono:'nav-icon fa fa-book'},
      /* {titulo:'Cerrar sesión', url:'',icono:'nav-icon fas fa-sign-out-alt',metodo:'logout()'} */
      /* {titulo:'Indicadores', url:'indicators',icono:'fa fa-bullseye'} */
    ]
  }]
}
