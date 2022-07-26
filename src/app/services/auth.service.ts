import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { IJwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment'



@Injectable()
export class AuthService {
  AUTH_SERVE: string = environment.API_URL;
  authSubject = new BehaviorSubject(false);
  any:any
  private token: string;
  private Id: number;

  constructor(private httpClient: HttpClient) { }


  register(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVE}/api/register`,
      user).pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            //guardar token
            this.savetoken(res.value.jwtToken);
          }
        })
      );

  }


  login(user: IUser): Observable<IJwtResponse> {
    /* debugger; */
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVE}/api/Login`,
      user).pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            //guardar token
            this.savetoken(res.value.jwtToken);
            this.saveObjeto(res.value)
          }
        })
      );

  }


  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");

  }

  private savetoken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);

    //localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private saveObjeto(any:any){
    localStorage.setItem("USUARIO", this.any);
    //localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = any;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  public isAuthenticated(): boolean {
    return !!this.getToken()
  }
}
