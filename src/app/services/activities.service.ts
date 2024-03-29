import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { };

  private setParameter(routeParams:any):HttpParams{
    let queryParams = new HttpParams()
    for (const key in routeParams){
      if (routeParams.hasOwnProperty(key)){
        queryParams = queryParams.set(key,routeParams[key])
      }
    }
    return queryParams
  }

  actividadesCalendario() {
    return this.http.get(`${this.ROOT_SERVE}/api/Actividad/Calendario`);
  }
  //actividades(){    return this.http.get(`${this.ROOT_SERVE}/api/Actividad`);  }

  actividades = (param: any = {}) => this.http.get( `${this.ROOT_SERVE}/api/Actividad`,{params:this.setParameter(param)} )


  subindices(programa_id:number){
    let params = new HttpParams({
      fromObject: { programa_id:programa_id },
    });
    return this.http.get(`${this.ROOT_SERVE}/api/Subindice/ListarByProgramaId`,{params});
  }

  insertActividad(actividad: any) {
		return this.http.post(`${this.ROOT_SERVE}/api/Actividad`, { ...actividad });
	}

  editActividad(actividad: any) {
		return this.http.put(`${this.ROOT_SERVE}/api/Actividad`, { ...actividad });
	}

  deleteActividad(actividad_id: number) {
    let params = new HttpParams({
      fromObject: { actividad_id:actividad_id },
    });
    return this.http.delete(`${this.ROOT_SERVE}/api/Actividad`, {params});
  }

  postInsertAsistencia(actividad_id:number,afiliado_id:string) {
    const asistencia = {
      'actividad_id':actividad_id,
      'afiliado_id':afiliado_id
    }

    return this.http.post(`${this.ROOT_SERVE}/api/AsistenciasActividades`,{...asistencia  });
  }

  deleteDeleteAsistencia(actividad_id:number,afiliado_id:string) {
    const asistencia2 = {
      'actividad_id':actividad_id,
      'afiliado_id':afiliado_id
    }

    return this.http.post(`${this.ROOT_SERVE}/api/AsistenciasActividades/Delete`,{...asistencia2 });
  }

}
