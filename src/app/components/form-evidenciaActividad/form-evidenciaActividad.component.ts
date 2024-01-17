import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { IActividadDTO } from '../../models/IActividadDTO';
import { DxFormComponent } from 'devextreme-angular';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-form-evidenciaActividad',
  templateUrl: './form-evidenciaActividad.component.html',
  styleUrls: ['./form-evidenciaActividad.component.css'],
})
export class FormEvidenciaActividadComponent implements OnInit {
  @Input() actividad: IActividadDTO = new IActividadDTO();
  @ViewChild(DxFormComponent) form: DxFormComponent;

  evidenciaData: any;
  evidencias: any[];
  isVisible: boolean = false;
  popupVisibleImagen: boolean = false;
  imagenBase64Popup: any;
  message: string = '';
  type: string = '';
  constructor(private evidenciaService: EvidenciaService) {}

  ngOnInit() {
    this.listarEvidencias(this.actividad.id);
  }

  ngOnChanges() {
    this.listarEvidencias(this.actividad.id);
  }

  listarEvidencias(actividad_id) {
    this.evidenciaService
      .evidencias(actividad_id)
      .subscribe((response: any) => {
        this.evidencias = response;
      });
  }

  deleteEvidencia(evidenciaId: any) {
    this.evidenciaService.deleteEvidencia(evidenciaId).subscribe(() => {
      this.listarEvidencias(this.actividad.id);
    });
  }

  verEvidencia(evidenciaId: any) {
    const evidencia = this.evidencias.find((ev) => ev.id === evidenciaId);

    if (evidencia) {
      console.log(evidencia);
      this.popupVisibleImagen = true;
      //this.imagenBase64Popup = evidencia.base64Str;
      this.imagenBase64Popup = `data:image/png;base64,${evidencia.base64Str}`;
      this.popupVisibleImagen = true;
    } else {
      console.log(`Evidencia con ID ${evidenciaId} no encontrada.`);
      // Puedes mostrar un mensaje al usuario indicando que no se encontró la evidencia.
    }
  }

  insertEvidencia = async (e: File) => {
    const existeArchivo = this.evidencias.some((ev) => ev.nombre === e.name);
    if (existeArchivo) {
      this.message = `El archivo ${e.name} ya existe en evidencias de la actividad.`;
      this.type = 'error';
      this.isVisible = true;
    } else {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.evidenciaData = {
          nombre: e.name,
          actividadId: this.actividad.id,
          tipo: e.type,
          base64str: reader.result as string,
        };
        this.form.instance._refresh();

        this.evidenciaService
        .insertEvidencia(this.evidenciaData)
        .pipe(
          switchMap(() => this.evidenciaService.evidencias(this.actividad.id))
        )
        .subscribe((response: any) => {
          this.evidencias = response;
        });
      };


      reader.readAsDataURL(e);
    }
  };
}
