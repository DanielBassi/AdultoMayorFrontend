import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//aqui en este archivo importaremos los 2 componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InfoComponent } from './info/info.component';

//luego creamos las rutas
const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'info', component:InfoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
