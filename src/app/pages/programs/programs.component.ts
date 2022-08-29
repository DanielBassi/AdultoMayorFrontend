import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgramaService } from 'src/app/services/programa.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit, OnDestroy {

  constructor(private programaService: ProgramaService) {}

  programasDTO: any;

  ngOnInit(): void {
    this.programas();
  }

  programas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.programasDTO = response;
      });
  }

  rowValidating(event: any){
    
  }

  editorPreparing(event: any){
    
  }

  ngOnDestroy(): void {
    
  }

}
