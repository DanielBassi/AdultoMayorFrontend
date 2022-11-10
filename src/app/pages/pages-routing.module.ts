import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProgramsComponent } from './programs/programs.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { AuthGuard } from '../guard/auth.guard';

const routes:Routes=[
  {
    path:'dashboard',
    component:PagesComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'Tablero'}},
      {path:'users',component:UsersComponent, data:{titulo:'Usuarios'}},
      {path:'activities',component:ActivitiesComponent, data:{titulo:'Actividades'}},
      {path:'programs',component:ProgramsComponent, data:{titulo:'Programas'}},
      {path:'indicators',component:IndicatorsComponent, data:{titulo:'Indicadores'}},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
