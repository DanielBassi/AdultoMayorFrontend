import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadPanelComponent } from './load-panel/load-panel.component'
import { DxLoadPanelModule } from 'devextreme-angular';

const components = [
  HeaderComponent,
  SidebarComponent,
  BreadcrumbsComponent,
  FooterComponent,
  LoadPanelComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    DxLoadPanelModule
  ],
  exports: components
})
export class SharedModule { }
