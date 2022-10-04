import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo:'Usuarios', url:'users',icono:'fa fa-users'},
      {titulo:'Programas', url:'programs',icono:'fa fa-cogs'},
      {titulo:'Actividades', url:'activities',icono:'fa fa-book'},
      /* {titulo:'Indicadores', url:'indicators',icono:'fa fa-bullseye'} */
    ]
  }]
}
