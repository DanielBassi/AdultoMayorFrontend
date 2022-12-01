import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProgramsComponent } from './programs/programs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { DxButtonModule, DxValidatorModule,DxFileUploaderModule, DxColorBoxModule, DxTabPanelModule, DxScrollViewModule, DxValidationGroupModule, DxTextAreaModule, DxDataGridModule, DxFormModule, DxPopupModule, DxSelectBoxModule ,DxToastModule,DxTemplateModule, DxTextBoxModule} from 'devextreme-angular';
import { DashboardModule } from './dashboard/dashboard.module';
import dxTextArea from 'devextreme/ui/text_area';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module'




@NgModule({
  declarations: [
    UsersComponent,
    PagesComponent,
    ProgramsComponent,
    ActivitiesComponent,
    IndicatorsComponent,
    AffiliatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DxDataGridModule,
    DxButtonModule,
    DashboardModule,
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
		BrowserModule,
    DxFileUploaderModule,
    ComponentsModule
  ],
  exports:[
    UsersComponent,
    ProgramsComponent,
    ActivitiesComponent,
    IndicatorsComponent,
    AffiliatesComponent
  ]
})
export class PagesModule { }
