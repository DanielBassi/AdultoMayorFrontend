import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../services/auth.service';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.authService.GetAuth()

    if( user?.jwtToken !== undefined ){
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${user.jwtToken}`)});
    }

    return next.handle(request)
      .pipe(
        map((res: any) => res),
        catchError((error: HttpErrorResponse) => {
          if( error.status === 401 ) {
            this.authService.destroyToken()
            this.authService.redirectBy('login')
          }
          else  notify(`${error.error}`, 'error', 2000)

          this.authService.setLoadingVisible(false)
          return throwError(`${error.error.message}`)

        })
      )
  }
}
