import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  listUsuarios() {
    return this.http.get(`${this.ROOT_SERVE}/api/User`);
  }

  insertUsuario(user: any): Observable<any>{
    return this.http.post(`${this.ROOT_SERVE}/api/User`, { ...user });
  }

  editUsuario(user:any): Observable<any>{
    return this.http.put(`${this.ROOT_SERVE}/api/User`, { ...user });
  }

  deleteUsuario(usuario_id:number): Observable<any>{
    let params = new HttpParams({
      fromObject: { usuario_id:usuario_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/User`, {params});
  }
}
