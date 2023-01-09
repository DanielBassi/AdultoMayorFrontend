import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { };

  getListAfiliados(){
    return this.http.get(`${this.ROOT_SERVE}/api/Afiliado`);
  }

  getInfoAfiliado(afiliado_id: string){
    let params = new HttpParams({
      fromObject: { afiliado_id:afiliado_id },
    });
    return this.http.get(`${this.ROOT_SERVE}/api/Afiliado/InfoAfiliado`,{params});
  }

  postInsertAfiliado(afiliado: any) {
		return this.http.post(`${this.ROOT_SERVE}/api/Afiliado`, { ...afiliado });
	}

  putEditAfiliado(afiliado: any) {
		return this.http.put(`${this.ROOT_SERVE}/api/Afiliado`, { ...afiliado });
	}

  deleteDeleteAfiliado(afiliado_id: string) {
    let params = new HttpParams({
      fromObject: { afiliado_id:afiliado_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Afiliado`, {params});
  }


}