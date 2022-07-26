import { NgModule, Component, enableProdMode } from '@angular/core';
import { ActivitiesService, Employee, State } from 'src/app/services/activities.service';
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
  providers: [ActivitiesService]
})
export class ActivitiesComponent {
  dataSource: Employee[];

  states: State[];
  
  constructor(private activitiesService:ActivitiesService) { 
    this.dataSource = activitiesService.getEmployees();
    this.states = activitiesService.getStates();
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


