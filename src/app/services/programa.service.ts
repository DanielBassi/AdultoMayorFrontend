import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  programas() {
    return this.http.get(`${this.ROOT_SERVE}/api/Program`);
  }  

}
