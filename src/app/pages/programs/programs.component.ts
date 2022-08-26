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

  programas : any;
  subindices : any;

  ngOnInit(): void {
    this.listarProgramas();
    this.subindices = [1,2,3,4];
  }

  listarProgramas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.programas = response;
      });
  }

  rowValidating(event: any){
    
  }

  editorPreparing(event: any){
    
  }

  ngOnDestroy(): void {
    
  }

}
