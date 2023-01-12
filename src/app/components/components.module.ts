import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormManualComponent } from './form-manual/form-manual.component';
import { DxButtonModule,DxCheckBoxModule, DxSwitchModule, DxValidatorModule,DxFileUploaderModule, DxColorBoxModule, DxTabPanelModule, DxScrollViewModule, DxValidationGroupModule, DxTextAreaModule, DxDataGridModule, DxFormModule, DxPopupModule, DxSelectBoxModule ,DxToastModule,DxTemplateModule, DxTextBoxModule} from 'devextreme-angular';
import { FormActividadDetailsComponent } from './form-actividadDetails/form-actividadDetails.component';
import { FormAfiliadoComponent } from './form-afiliado/form-afiliado.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormEstadoSaludComponent } from './form-estadoSalud/form-estadoSalud.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
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
    DxCheckBoxModule
  ],
  declarations: [FormManualComponent,FormActividadDetailsComponent,FormAfiliadoComponent,FormEstadoSaludComponent],
  exports: [FormManualComponent,FormActividadDetailsComponent,FormAfiliadoComponent,FormEstadoSaludComponent]
})
export class ComponentsModule { }
