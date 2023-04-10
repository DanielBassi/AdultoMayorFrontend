import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProgramaDTO } from '../models/IProgramaDTO';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient, private authService: AuthService) { }

  programas() {
    return this.http.get(`${this.ROOT_SERVE}/api/Program`);
  }

  insertPrograma(programa:IProgramaDTO) {
    this.authService.setLoadingVisible(true)
    return this.http.post(`${this.ROOT_SERVE}/api/Program`, { ...programa });
  }

  editPrograma(programa:IProgramaDTO) {
    this.authService.setLoadingVisible(true)
    return this.http.put(`${this.ROOT_SERVE}/api/Program`, { ...programa });
  }

  deletePrograma(programa_id:number) {
    this.authService.setLoadingVisible(true)
    let params = new HttpParams({
      fromObject: { programa_id:programa_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Program`, {params});
  }
}
