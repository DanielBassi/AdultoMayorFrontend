import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { locale } from 'devextreme/localization';


if (environment.production) {
  enableProdMode();
}
enableProdMode();
locale('es');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
