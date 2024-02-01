import { Component } from '@angular/core';
import deMessages from 'node_modules/devextreme/localization/messages/es.json';
import { locale, loadMessages } from 'devextreme/localization';

import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CL';
registerLocaleData(localeEsCo);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor() {
    loadMessages(deMessages);
    locale("es-ES");
  }
}


