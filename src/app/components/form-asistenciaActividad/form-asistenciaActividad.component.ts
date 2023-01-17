import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { AffiliateService } from '../../services/affiliate.service'
import { ActivitiesService } from '../../services/activities.service';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { IActividadDTO } from '../../models/IActividadDTO';
@Component({
  selector: 'app-form-asistenciaActividad',
  templateUrl: './form-asistenciaActividad.component.html',
  styleUrls: ['./form-asistenciaActividad.component.css']
})
export class FormAsistenciaActividadComponent implements OnInit {
  @Input() actividad: IActividadDTO = new IActividadDTO()

  afiliadosActivos: IAfiliadoDTO[] = []
  constructor(private affiliateService: AffiliateService,private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.listarAfiliadosActivos(this.actividad.id)
  }

  ngOnChanges(afiliadosActivos: SimpleChanges) {
    this.listarAfiliadosActivos(this.actividad.id)
  }

  listarAfiliadosActivos(actividad_id){
    this.affiliateService.getListAfiliadosActivosByActividad(actividad_id).subscribe((response : any)=>{
      this.afiliadosActivos=response;
    })
  }

  insertAsistencia(afiliado_id){
    this.activitiesService.postInsertAsistencia(this.actividad.id,afiliado_id).subscribe((response : any)=>{
      this.listarAfiliadosActivos(this.actividad.id)
    })
  }
  deleteAsistencia(afiliado_id){
    this.activitiesService.deleteDeleteAsistencia(this.actividad.id,afiliado_id).subscribe((response : any)=>{
      this.listarAfiliadosActivos(this.actividad.id)
    })
  }


}
