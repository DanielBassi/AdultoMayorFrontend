import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProgramsComponent } from './programs/programs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  declarations: [
    UsersComponent,
    PagesComponent,
    ProgramsComponent,
    ActivitiesComponent,
    IndicatorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DxDataGridModule,
    DxButtonModule,
    DashboardModule
  ],
  exports:[
    UsersComponent,
    ProgramsComponent,
    ActivitiesComponent,
    IndicatorsComponent
  ]
})
export class PagesModule { }
