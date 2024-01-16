import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { IActividadDTO } from 'src/app/models/IActividadDTO';
import { AuthService } from 'src/app/services/auth.service';



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
  isCollapsed = true;
  titleAccordion:any[]=['Programas por colores']

  calendarOptions:CalendarOptions={
    plugins: [
      interactionPlugin,
      dayGridPlugin,
    ],

    headerToolbar: {
      left  : 'prev,next today',
      center: 'title',
      right : 'dayGridMonth,dayGridWeek'
    },
    initialView: 'dayGridMonth',
    locale: esLocale,
    themeSystem: 'bootstrap',
    eventClick: this.clickEvent.bind(this),
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      meridiem: false
    },
    eventDisplay:'block'

  }

  clickEvent(arg: any) {
    this.actividadId=arg.event.id;
    /* console.log(this.actividadId);
    console.log(this.actividades); */
    this.actividadDetails=null;
    this.actividadDetails = this.actividades.find(f=>f.id==this.actividadId);
    /* console.log(this.actividadDetails); */
    this.popupDetailsVisible = true;
  }

  constructor(
    private activitiesService : ActivitiesService,
    private programaService:ProgramaService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.actividadDetails= new IActividadDTO()
    this.listarActividades();
    this.listarActividadesCalendario();
    this.listarProgramas();
    /* console.log(this.actividades);
    console.log(this.actividadDetails); */
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
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
      this.authService.setLoadingVisible(false)
    })
  }

 inicializarActividad(){
  this.actividadDetails=new IActividadDTO()
 }

  listarActividades(){
    this.activitiesService.actividades().subscribe((response:IActividadDTO[])=>{
      this.actividades = response
    })
  }




}
