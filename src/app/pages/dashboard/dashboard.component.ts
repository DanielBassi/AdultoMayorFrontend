import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions, renderMicroColGroup } from '@fullcalendar/angular'; // useful for typechecking
import { ActivitiesService } from 'src/app/services/activities.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';
import interactionPlugin from '@fullcalendar/interaction';

import esLocale from '@fullcalendar/core/locales/es.js';
import { IActividadDTO } from 'src/app/models/IActividadDTO';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /* calendarOptions:CalendarOptions; */
  popupDetailsVisible:boolean = false;
  actividadId:number;
  actividadDetails:IActividadDTO;
  actividadesCalendario:any[]=[]
  list:IProgramaDTO[]
  actividades: IActividadDTO[] = [];
  showModal:boolean=false;

  calendarOptions:CalendarOptions={
    headerToolbar: {
      left  : 'prev,next today',
      center: 'title',
      right : 'dayGridMonth,dayGridWeek'
    },
    initialView: 'dayGridMonth',
    locale: esLocale,
    themeSystem: 'bootstrap',
    eventClick: this.clickEvent.bind(this)
  }
  
  clickEvent(arg: any) {
    this.actividadId=arg.event.id;
    console.log(this.actividadId);
    this.actividadDetails = this.actividades.find(f=>f.id=this.actividadId);
    console.log(this.actividadDetails);
    this.popupDetailsVisible = true;
  }
 
  constructor(private activitiesService : ActivitiesService,private programaService:ProgramaService) { }

  ngOnInit(): void {
    this.actividadDetails= new IActividadDTO()
    this.listarActividades();
    this.listarActividadesCalendario();
    this.listarProgramas();
  }

  listarActividadesCalendario() {
    this.activitiesService
      .actividadesCalendario()
      .subscribe((response: any[]) => {
        this.calendarOptions.events=response
      });
  }


  visibleEvent(event){
    this.popupDetailsVisible=event
  }

  listarProgramas(){
    this.programaService.programas().subscribe((response: any[]) => {
      this.list=response
    })
  }

 inicializarActividad(){
  this.actividadDetails=new IActividadDTO()
 }

  async listarActividades(){
    await this.activitiesService.actividades().subscribe((response:IActividadDTO[])=>{
      this.actividades = response
    })
  }




}
