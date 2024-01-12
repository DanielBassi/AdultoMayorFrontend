import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, ViewChild } from '@angular/core';
import { AffiliateService } from '../../services/affiliate.service'
import { ActivitiesService } from '../../services/activities.service';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { IActividadDTO } from '../../models/IActividadDTO';
import { DxFormComponent } from 'devextreme-angular';
@Component({
  selector: 'app-form-evidenciaActividad',
  templateUrl: './form-evidenciaActividad.component.html',
  styleUrls: ['./form-evidenciaActividad.component.css']
})
export class FormEvidenciaActividadComponent implements OnInit {
  @Input() actividad: IActividadDTO = new IActividadDTO()
  @ViewChild(DxFormComponent) form: DxFormComponent

  afiliadosActivos: IAfiliadoDTO[] = []
  evidenciaData:any;
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



  onUploadedFormatASQ = async (e: File) => {
    const reader = new FileReader()
    let base64Data
    reader.onloadend = () => {
      base64Data = reader.result
      this.evidenciaData = {
          nombre: e.name,
          actividadId : this.actividad.id,
          tipo: e.type,
          base64: reader.result,
        },
    reader.readAsDataURL(e)
    this.form.instance._refresh()
    }
  }

}
