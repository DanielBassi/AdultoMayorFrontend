import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISubindiceDTO } from '../models/ISubindiceDTO';

@Injectable({
  providedIn: 'root'
})
export class SubindiceService {

  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  listSubindices(){
    return this.http.get(`${this.ROOT_SERVE}/api/Subindice`);
  }

  insertSubindice(subindice: ISubindiceDTO){
    return this.http.post(`${this.ROOT_SERVE}/api/Subindice`, { ...subindice });
  }

  editSubindice(subindice: ISubindiceDTO){
    return this.http.put(`${this.ROOT_SERVE}/api/Subindice`, { ...subindice });
  }

  deleteSubindice(subindice_Id: number){
    let params = new HttpParams({
      fromObject: { subindice_Id:subindice_Id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Subindice`, {params});
  }
}
