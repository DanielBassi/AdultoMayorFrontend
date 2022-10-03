import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComponenteDTO } from '../models/IComponenteDTO';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  listComponentes(){
    return this.http.get(`${this.ROOT_SERVE}/api/Componente`);
  }

  listComponentesByProgramaId(programa_id: number){
    let params = new HttpParams({
      fromObject: { programa_id:programa_id },
    });
    return this.http.get(`${this.ROOT_SERVE}/api/Componente/ListarByProgramaId`, {params});
  }

  insertComponente(componente:IComponenteDTO){
    return this.http.post(`${this.ROOT_SERVE}/api/Componente`, { ...componente });
  }

  editComponente(componente:IComponenteDTO){
    return this.http.put(`${this.ROOT_SERVE}/api/Componente`, { ...componente });
  }

  deleteComponente(componente_id: number) {
    let params = new HttpParams({
      fromObject: { componente_id:componente_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Componente`, {params});
  }
}
