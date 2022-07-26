import { Component, OnInit, OnDestroy } from '@angular/core';
import { IndicatorsService } from 'src/app/services/indicators.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit, OnDestroy {

  constructor(private indicatorsService: IndicatorsService) { }

  dataSource: any;

  ngOnInit(): void {
    this.indicadores()
  }

  indicadores(){
    this.indicatorsService
      .indicadores()
      .subscribe((response: any)=>{
        this.dataSource = response;
      });
  }

  rowValidating(event: any){
    console.log(event);
  }

  editorPreparing(event: any){
    console.log(event);
  }

  ngOnDestroy(): void {
    
  }

}
