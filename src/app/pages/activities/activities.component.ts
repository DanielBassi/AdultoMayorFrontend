import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DxSelectBoxModule, DxDataGridModule,DxTextBoxModule,
  DxTemplateModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  providers: [ActivitiesService] 
})
export class ActivitiesComponent implements OnInit {  
  constructor(private activitiesService:ActivitiesService) {}
  actividades : any;
  estados: any;
  programasDTO:any;
  
  ngOnInit(): void{
    this.listarActividades();
    this.listarProgramas();
  }
  
  listarProgramas(){
    this.activitiesService
    .programas()
    .subscribe((response:any)=>{
      this.programasDTO=response;
    });
  }
  listarActividades(){
    this.activitiesService
    .actividades()
    .subscribe((response:any)=>{
      this.actividades=response;
    });
  }
  

}
@NgModule({
  imports: [
    DxTextBoxModule,
    DxTemplateModule,
    BrowserModule,
    DxSelectBoxModule,
    DxDataGridModule
  ],
  declarations: [],
  bootstrap: [ActivitiesComponent]
})

export class ActivitiesModule { }
  
platformBrowserDynamic().bootstrapModule(ActivitiesModule);


