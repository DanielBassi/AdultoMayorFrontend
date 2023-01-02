import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify'
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ROOT_SERVE: string = environment.API_URL

  constructor(private http: HttpClient) { }

  notify(message: string, type: string) {
    notify({
      message: `${message}`,
      type: `${type}`,
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    },
    {
      position: 'bottom center',
      direction: 'up-push'
    });

  }


}
