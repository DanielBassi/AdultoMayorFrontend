import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient) { }

  programas() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }  

}
