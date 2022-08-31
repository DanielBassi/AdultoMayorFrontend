import { NgModule, Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DxSelectBoxModule, DxDataGridModule,DxTextBoxModule,
  DxTemplateModule } from 'devextreme-angular';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';

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

  @ViewChild('filterTxt', { static: false }) filterMedicineTextBox: DxSelectBoxComponent;  
  
  search: boolean = true;
  currentProgram: number;
  
  constructor(private activitiesService:ActivitiesService) {}
  actividades : any;
  estados: any;
  programasDTO:any;
  subindicesDTO:any;

  
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

  
  getProgramBySelection(e: any){
    if ( !!e.selectedItem){
      this.programasDTO.find(x => x.id == e.selectedItem.id).id;
      this.currentProgram=e.selectedItem.id
      this.activitiesService
      .subindices(e.selectedItem.id)
      .subscribe((response:any)=>{
        this.subindicesDTO=response;
      })
    }  
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


