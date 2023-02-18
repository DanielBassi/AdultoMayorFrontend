import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxSwitchModule, DxCheckBoxModule,DxFileUploaderModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxListModule, DxPopupModule, DxSelectBoxModule, DxSliderModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


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
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
