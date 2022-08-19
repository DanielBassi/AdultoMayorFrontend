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

  dataSource: any;

  ngOnInit(): void {
    this.programas();
  }

  programas(){
    this.programaService
      .programas()
      .subscribe((response: any) => {
        this.dataSource = response;
      });
  }

  rowValidating(event: any){
    
  }

  editorPreparing(event: any){
    
  }

  ngOnDestroy(): void {
    
  }

}
