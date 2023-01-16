import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service"

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private cookies: CookieService

  getToken() {
    console.log(this.cookies.get("access_token"))
    return this.cookies.get("access_token") !== '' ? JSON.parse(this.cookies.get("access_token")) : null
  }

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo:'Afiliados', url:'affiliates',icono:'nav-icon fa fa-bullseye'},
      {titulo:'Programas', url:'programs',icono:'nav-icon fa fa-cogs'},
      {titulo:'Actividades', url:'activities',icono:'nav-icon fa fa-book'},
      {titulo:'Usuarios', url:'users',icono:'nav-icon fa fa-users'}
      /* {titulo:'Indicadores', url:'indicators',icono:'fa fa-bullseye'} */
    ]
  }]
}
