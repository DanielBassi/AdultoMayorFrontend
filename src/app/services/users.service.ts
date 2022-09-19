import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUsuarioDTO } from '../models/IUsuarioDTO';

const roles = ["admin","operador","invitado","contratista"]
const tiposIdentificacion = ["C.c.","T.i."]
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  listUsuarios() {
    return this.http.get(`${this.ROOT_SERVE}/api/User`);
  }

  insertUsuario(user: IUsuarioDTO): Observable<any>{
    return this.http.post(`${this.ROOT_SERVE}/api/User`, { ...user });
  }

  editUsuario(user:IUsuarioDTO): Observable<any>{
    return this.http.put(`${this.ROOT_SERVE}/api/User`, { ...user });
  }

  deleteUsuario(usuario_id:number): Observable<any>{
    let params = new HttpParams({
      fromObject: { usuario_id:usuario_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/User`, {params});
  }
  listRoles(){
    return roles;
  }
  listTiposIdentificacion(){
    return tiposIdentificacion;
  }
}
