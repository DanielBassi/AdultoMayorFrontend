import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpRequestInterceptor } from '../Interceptor/HttpRequest.interceptor';
import { appReducers } from '../store/app.reducers'
import {tokenGetter} from './tokenGetter'

@NgModule({
  declarations: [RegisterComponent, LoginComponent, InfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }, StoreDevtoolsModule]
})
export class AuthModule { }
