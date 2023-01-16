import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxSwitchModule, DxCheckBoxModule,DxFileUploaderModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxListModule, DxPopupModule, DxSelectBoxModule, DxSliderModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { JwtModule } from '@auth0/angular-jwt';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { HttpRequestInterceptor } from './Interceptor/HttpRequest.interceptor';
import { appReducers } from './store/app.reducers'


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
    JwtModule.forRoot({
      config: {
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
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },StoreDevtoolsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
