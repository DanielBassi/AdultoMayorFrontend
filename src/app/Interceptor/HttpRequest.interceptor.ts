import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.authService.getToken()

    if( user?.token !== undefined ){
      request = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${user.token}`)
          .set('roles_id', `${user.usuario.rol.id}`)
      });
    }

    return next.handle(request)
      .pipe(
        map((res: any) => {
          return res
        }),
        catchError((error: HttpErrorResponse) => {

          notify(`${error.error.message}`, 'error', 2000)
          this.authService.setLoadingVisible(false)

          /* if( error.error.statusError === 401 )
            this.router.navigateByUrl('/auth') */

          return throwError(`${error.error.message}`)
        })
      )
  }
}
