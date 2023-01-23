import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-reporte',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css',
    "../../../../node_modules/devextreme/dist/css/dx.common.css",
    "../../../../node_modules/devextreme/dist/css/dx.light.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
  ]
})
export class ReporteComponent implements OnInit {

  afiliado_id: string ;
  title = 'DXReportViewerSample';
  reportUrl: string = 'FichaTecnica/';
  hostUrl: string = `${environment.API_URL}/api/`;
  // Use this line if you use an ASP.NET MVC backend
  //invokeAction: string = "/WebDocumentViewer/Invoke";
  // Use this line if you use an ASP.NET Core backend
  invokeAction: string = 'DXXRDV';

  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.afiliado_id=this.rutaActiva.snapshot.paramMap.get('afiliado_id')
    this.reportUrl += this.afiliado_id
  }
}
