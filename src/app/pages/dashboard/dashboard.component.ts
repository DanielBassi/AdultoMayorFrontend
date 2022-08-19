import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ActivitiesService } from 'src/app/services/activities.service';

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

  actividadesCalendaio(){
    this.activitiesService
      .actividadesCalendario()
      .subscribe((response: any[]) => {
        
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this),// bind is important!
          locale: 'es',
          themeSystem: 'bootstrap', 
          events: response
        };
        
      });
  }

}
