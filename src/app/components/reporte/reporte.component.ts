import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reporte',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporte.component.html',
  styleUrls: [
    './reporte.component.css',
    '../../../../node_modules/devextreme/dist/css/dx.common.css',
    '../../../../node_modules/devextreme/dist/css/dx.light.css',
    '../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css',
    '../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css',
    '../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css',
  ],
})
export class ReporteComponent implements OnInit {
  height: string;
  title = 'DXReportViewerSample';
  reportUrl: string;
  hostUrl: string = `${environment.API_URL}/api/`;
  invokeAction: string = 'DXXRDV';

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.reportUrl = `${this.rutaActiva.snapshot.paramMap.get(
      'name'
    )}/${this.rutaActiva.snapshot.paramMap.get('id')}`;
    this.height = `${window.innerWidth}px `;
    console.log(this.height);
  }
}
