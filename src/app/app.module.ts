import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxSwitchModule, DxCheckBoxModule, DxFileUploaderModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxListModule, DxPopupModule, DxSelectBoxModule, DxSliderModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './auth/tokenGetter';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './services/auth.service';
import { HttpRequestInterceptor } from './Interceptor/HttpRequest.interceptor';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    DxTemplateModule,
    DxDataGridModule,
    DxPopupModule,
    DxTextBoxModule,
    DxListModule,
    DxSliderModule,
    DxFormModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxFileUploaderModule,
    DxSwitchModule,
    HttpClientModule,
    SharedModule,
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
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    StoreDevtoolsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
