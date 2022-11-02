import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormManualComponent } from './form-manual/form-manual.component';
import { DxButtonModule, DxValidatorModule,DxFileUploaderModule, DxColorBoxModule, DxTabPanelModule, DxScrollViewModule, DxValidationGroupModule, DxTextAreaModule, DxDataGridModule, DxFormModule, DxPopupModule, DxSelectBoxModule ,DxToastModule,DxTemplateModule, DxTextBoxModule} from 'devextreme-angular';
import { FormActividadDetailsComponent } from './form-actividadDetails/form-actividadDetails.component';


@NgModule({
  imports: [
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
    DxFileUploaderModule
  ],
  declarations: [FormManualComponent,FormActividadDetailsComponent],
  exports: [FormManualComponent,FormActividadDetailsComponent]
})
export class ComponentsModule { }
