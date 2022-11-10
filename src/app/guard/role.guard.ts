import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor( private service: AuthService, private router: Router ){

  }

  canActivate(routeActive: ActivatedRouteSnapshot): boolean {

    const roles = routeActive.data.roles as Array<string>
    const user_role = this.service.getToken()?.usuario?.rol?.nombre

    if ( roles.includes(String(user_role).toUpperCase())) {
      return true
    }
    this.service.notify('No tienes permisos', 'error')
    this.router.navigate(['/'])
    return false
  }

}
