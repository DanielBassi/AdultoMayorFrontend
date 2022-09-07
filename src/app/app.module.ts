import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxFormModule, DxListModule, DxPopupModule, DxSliderModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
