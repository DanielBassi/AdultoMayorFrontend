import { HttpClient } from '@angular/common/http';
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
  

}
