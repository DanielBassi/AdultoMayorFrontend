import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient, private authService: AuthService) { }

  evidencias() {
    return this.http.get(`${this.ROOT_SERVE}/api/Evidencia`);
  }

  insertEvidencia(evidencia:any) {
    this.authService.setLoadingVisible(true)
    return this.http.post(`${this.ROOT_SERVE}/api/Evidencia`, { ...evidencia });
  }

  editEvidencia(evidencia:any) {
    this.authService.setLoadingVisible(true)
    return this.http.put(`${this.ROOT_SERVE}/api/Evidencia`, { ...evidencia });
  }

  deleteEvidencia(evidencia_id:number) {
    this.authService.setLoadingVisible(true)
    let params = new HttpParams({
      fromObject: { evidencia_id:evidencia_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Evidencia`, {params});
  }
}
