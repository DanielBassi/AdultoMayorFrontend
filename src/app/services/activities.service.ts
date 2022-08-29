import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { };

  actividadesCalendario() {
    return this.http.get(`${this.ROOT_SERVE}/api/Actividad/Calendario`);
  }
  actividades(){
    return this.http.get(`${this.ROOT_SERVE}/api/Actividad`);
  }
  programas(){
    return this.http.get(`${this.ROOT_SERVE}/api/Program`);
  }
  
}
