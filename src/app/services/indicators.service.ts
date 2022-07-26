import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private http: HttpClient) { }

  indicadores() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
