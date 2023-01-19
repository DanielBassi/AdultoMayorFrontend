import { Component, OnInit, ViewEncapsulation } from '@angular/core';



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

  title = 'DXReportViewerSample';
  reportUrl: string = 'FichaTecnica';
  hostUrl: string = 'https://localhost:44317/api/';
  // Use this line if you use an ASP.NET MVC backend
  //invokeAction: string = "/WebDocumentViewer/Invoke";
  // Use this line if you use an ASP.NET Core backend
  invokeAction: string = 'DXXRDV';

  constructor() { }

  ngOnInit() {
  }

}
