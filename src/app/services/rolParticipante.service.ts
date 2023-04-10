import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProgramaDTO } from '../models/IProgramaDTO';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolParticipanteService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient, private authService: AuthService) { }

  rolesParticipantes() {
    return this.http.get(`${this.ROOT_SERVE}/api/RolParticipantesActividad`);
  }

}
