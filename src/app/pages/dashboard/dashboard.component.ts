import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ActivitiesService } from 'src/app/services/activities.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';

import esLocale from '@fullcalendar/core/locales/es.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  calendarOptions: CalendarOptions;

  constructor(private activitiesService : ActivitiesService,private programaService:ProgramaService) { }

  list:IProgramaDTO[]

  ngOnInit(): void {
    this.actividadesCalendaio();
    this.listarProgramas();
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  eventClicDate(event: any): void{
    console.log(event);
  }

  listarProgramas(){
    this.programaService.programas().subscribe((response: any[]) => {
      this.list=response
    })
  }

  actividadesCalendaio(){
    this.activitiesService
      .actividadesCalendario()
      .subscribe((response: any[]) => {

        this.calendarOptions = {
          headerToolbar: {
            left  : 'prev,next today',
            center: 'title',
            right : 'dayGridMonth,dayGridWeek'
          },
          initialView: 'dayGridMonth',
          locale: esLocale,
          themeSystem: 'bootstrap',
          events: response
        };

      });
  }

}
