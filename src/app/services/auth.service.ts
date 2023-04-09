import { Injectable } from '@angular/core'
import { IUser } from '../models/user'
import { IJwtResponse } from '../models/jwt-response'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { CookieService } from "ngx-cookie-service"
import { HttpClient } from '@angular/common/http'
import { AppState } from '../store/app.reducers'
import * as reduxActions from '../store/actions'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'

@Injectable()
export class AuthService {

  private AUTH_SERVE: string = environment.API_URL

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  public SetAuth(response: any): void {
    this.cookies.set('USER', JSON.stringify(response))
  }

  public GetAuth(): any {
    return this.cookies.get(environment.COOKIE_SESSION) !== '' ? JSON.parse(this.cookies.get(environment.COOKIE_SESSION)) : null
  }

  register(user: IUser): Observable<IJwtResponse> {
    return this.http.post<IJwtResponse>(`${this.AUTH_SERVE}/api/register`,
      user).pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            this.SetAuth(res)
          }
        })
      )
  }

  public login = (user: any): Observable<any> => this.http.post(`${this.AUTH_SERVE}/api/Login`, { ...user })

  public logout = (): void => this.cookies.delete(environment.COOKIE_SESSION)

  public isAuthenticated = (): boolean => !!this.GetAuth()

  public destroyToken = (): void => this.cookies.delete(environment.COOKIE_SESSION)

  public redirectBy(url: string) {
    this.router.navigateByUrl(`/${url}`)
  }

  public setLoadingVisible(loadingVisible: boolean) {
    this.store.dispatch(reduxActions.setLoadingVisible({ loadingVisible: loadingVisible }))
  }
}
