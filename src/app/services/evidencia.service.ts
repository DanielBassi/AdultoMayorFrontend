import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EvidenciaService {
  ROOT_SERVE: string = environment.API_URL;
  constructor(private http: HttpClient, private authService: AuthService) {}

  evidencias(actividadId: number) {
    let params = new HttpParams({
      fromObject: { actividadId: actividadId },
    });
    return this.http.get(`${this.ROOT_SERVE}/api/EvidenciasActividades`, {
      params,
    });
  }

  insertEvidencia(evidencia: any) {
    return this.http.post(`${this.ROOT_SERVE}/api/EvidenciasActividades`, {
      ...evidencia,
    });
  }

  deleteEvidencia(evidenciaId: string) {
    let params = new HttpParams({
      fromObject: { evidenciaId: evidenciaId },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/EvidenciasActividades`, {
      params,
    });
  }
}
