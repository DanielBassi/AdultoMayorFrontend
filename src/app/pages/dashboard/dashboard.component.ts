import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ActivitiesService } from 'src/app/services/activities.service';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  calendarOptions: CalendarOptions;

  constructor(private activitiesService : ActivitiesService) { }

  ngOnInit(): void {
    this.actividadesCalendaio();
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  eventClicDate(event: any): void{
    console.log(event);
  }

  actividadesCalendaio(){
    this.activitiesService
      .actividadesCalendario()
      .subscribe((response: any[]) => {

        this.calendarOptions = {
          initialView: 'dayGridMonth',
          locale: esLocale,
          themeSystem: 'bootstrap',
          events: response
        };

      });
  }

}
