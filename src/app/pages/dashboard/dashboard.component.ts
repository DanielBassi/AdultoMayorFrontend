import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date = new Date()
  d    = this.date.getDate()
  m    = this.date.getMonth()
  y    = this.date.getFullYear()
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),// bind is important!
    locale: 'es',
    themeSystem: 'bootstrap', 
    events: [
      {
        title          : 'Actividad 1',
        start          : new Date(this.y, this.m, 1),
        backgroundColor: '#f56954', //red
        borderColor    : '#f56954', //red
        allDay         : true
      },
      {
        title          : 'Actividad 2',
        start          : new Date(this.y, this.m, this.d - 5),
        end            : new Date(this.y, this.m, this.d - 2),
        backgroundColor: '#f39c12', //yellow
        borderColor    : '#f39c12' //yellow
      },
      {
        title          : 'Reunion semanal',
        start          : new Date(this.y, this.m, this.d, 10, 30),
        allDay         : false,
        backgroundColor: '#0073b7', //Blue
        borderColor    : '#0073b7' //Blue
      },
      {
        title          : 'Merienda',
        start          : new Date(this.y, this.m, this.d, 12, 0),
        end            : new Date(this.y, this.m, this.d, 14, 0),
        allDay         : false,
        backgroundColor: '#00c0ef', //Info (aqua)
        borderColor    : '#00c0ef' //Info (aqua)
      },
      {
        title          : 'Cumpleaños',
        start          : new Date(this.y, this.m, this.d + 1, 19, 0),
        end            : new Date(this.y, this.m, this.d + 1, 22, 30),
        allDay         : false,
        backgroundColor: '#00a65a', //Success (green)
        borderColor    : '#00a65a' //Success (green)
      },
      {
        title          : 'Link Google',
        start          : new Date(this.y, this.m, 28),
        end            : new Date(this.y, this.m, 29),
        url            : 'https://www.google.com/',
        backgroundColor: '#3c8dbc', //Primary (light-blue)
        borderColor    : '#3c8dbc' //Primary (light-blue)
      }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  constructor() { 
    let date = new Date()
    let d    = date.getDate()
    let m    = date.getMonth()
    let y    = date.getFullYear()
  }

  ngOnInit(): void {
    
  }

}
