import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProgramsComponent } from './programs/programs.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { DetalleAfiliadoComponent } from './detalleAfiliado/detalleAfiliado.component';
import { AuthGuard } from '../guard/auth.guard';
import { ReporteComponent } from '../components/reporte/reporte.component';
import { ProgramaComponent } from './programa/programa.component';
import { UsuarioComponent } from './usuario/usuario.component'
import { GuardGuard } from '../guard/guard.guard';

const routes:Routes=[
  {
    path:'',
    component:PagesComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'Tablero'}},
      {path:'dashboard',component:DashboardComponent, data:{titulo:'Tablero'}},
      {path:'users',component:UsuarioComponent, data:{titulo:'Usuarios'}},
      {path:'activities',component:ActivitiesComponent, data:{titulo:'Actividades'}},
      {path:'programs',component:ProgramaComponent, data:{titulo:'Programas'}},
      {path:'indicators',component:IndicatorsComponent, data:{titulo:'Indicadores'}},
      {path:'affiliates',component:AffiliatesComponent, data:{titulo:'Afiliados'}},
      {path:'affiliates/insert',component:DetalleAfiliadoComponent, data:{titulo: 'Formulario de afiliado'}},
      {path:'affiliates/detail/:id/:metodo',component:DetalleAfiliadoComponent, data:{titulo: 'Formulario de afiliado'}},
      {path:'affiliates/edit/:id/:metodo',component:DetalleAfiliadoComponent, data:{titulo: 'Formulario de afiliado'}},
      {path:'reports/:name/:id',component:ReporteComponent, data:{titulo: 'Reportes'}},
      {path:'borrador',component:ProgramaComponent, data:{titulo: 'Programas'}},
      {path:'borrador2',component:UsuarioComponent, data:{titulo: 'Usuarios'}}

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
