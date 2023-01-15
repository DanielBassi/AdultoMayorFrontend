import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

import { ComponentsModule } from '../../components/components.module';

import { DxPopupModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FullCalendarModule,
    DxPopupModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
