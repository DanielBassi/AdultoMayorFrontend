import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  /* providers: [ActivitiesService] */
})
export class ActivitiesComponent implements OnInit {  
  constructor(private activitiesService:ActivitiesService) {}
  actividades : any;
  estados: any;
  
  ngOnInit(): void{
    this.listarActividades();
    this.estados=["activo","inactivo"];
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
    BrowserModule,
    DxDataGridModule
  ],
  declarations: [],
  bootstrap: [ActivitiesComponent]
})

export class ActivitiesModule { }
  
platformBrowserDynamic().bootstrapModule(ActivitiesModule);


