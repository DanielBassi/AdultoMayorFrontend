import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProgramaDTO } from '../models/IProgramaDTO';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  programas() {
    return this.http.get(`${this.ROOT_SERVE}/api/Program`);
  }
  
  insertPrograma(programa:IProgramaDTO) {
    return this.http.post(`${this.ROOT_SERVE}/api/Program`, { ...programa });
  }
  
  editPrograma(programa:IProgramaDTO) {
    return this.http.put(`${this.ROOT_SERVE}/api/Program`, { ...programa });
  }

  deletePrograma(programa_id:number) {
    let params = new HttpParams({
      fromObject: { programa_id:programa_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Program`, {params});
  }
}
