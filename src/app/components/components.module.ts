import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormManualComponent } from './form-manual/form-manual.component';
import {
  DxButtonModule,
  DxDateBoxModule,
  DxCheckBoxModule,
  DxSwitchModule,
  DxValidatorModule,
  DxFileUploaderModule,
  DxColorBoxModule,
  DxTabPanelModule,
  DxScrollViewModule,
  DxValidationGroupModule,
  DxTextAreaModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxToastModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxRadioGroupModule,
} from 'devextreme-angular';
import { FormActividadDetailsComponent } from './form-actividadDetails/form-actividadDetails.component';
import { FormAfiliadoComponent } from './form-afiliado/form-afiliado.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormEstadoSaludComponent } from './form-estadoSalud/form-estadoSalud.component';
import { FormAlergiasAfiliadoComponent } from './form-alergiasAfiliado/form-alergiasAfiliado.component';
import { FormEnfermedadBaseAfiliadoComponent } from './form-enfermedadBaseAfiliado/form-enfermedadBaseAfiliado.component';
import { FormAsistenciaActividadComponent } from './form-asistenciaActividad/form-asistenciaActividad.component';
import { FormEvidenciaActividadComponent } from './form-evidenciaActividad/form-evidenciaActividad.component';
import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { ReporteComponent } from './reporte/reporte.component';
import { FormSubindiceComponent } from './form-subindice/form-subindice.component';
import { FormProgramaComponent } from './form-programa/form-programa.component';
import { SignPadComponent } from './SignPadComponent/SignPadComponent.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

const components = [
  FormManualComponent,
  FormActividadDetailsComponent,
  FormAfiliadoComponent,
  FormEstadoSaludComponent,
  FormAlergiasAfiliadoComponent,
  FormEnfermedadBaseAfiliadoComponent,
  FormAsistenciaActividadComponent,
  FormEvidenciaActividadComponent,
  ReporteComponent,
  FormSubindiceComponent,
  FormProgramaComponent,
  SignPadComponent,
  FormUsuarioComponent,
];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DxReportViewerModule,
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxFormModule,
    DxToastModule,
    DxTemplateModule,
    DxTextAreaModule,
    DxScrollViewModule,
    DxTabPanelModule,
    DxValidationGroupModule,
    DxColorBoxModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxSwitchModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxRadioGroupModule,
  ],
  declarations: components,
  exports: components,
})
export class ComponentsModule {}
