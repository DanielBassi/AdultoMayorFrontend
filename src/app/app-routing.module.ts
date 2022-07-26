import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
//aqui vamos hacer la redireccion
const routes: Routes = [

   {path:'', redirectTo: '/login',   pathMatch:'full'},
   {path:'**',component:NopageFoundComponent}, 
   //{path:'auth', loadChildren:() => import ('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

