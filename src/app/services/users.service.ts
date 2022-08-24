import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ROOT_SERVE: string = environment.API_URL
  constructor(private http: HttpClient) { }

  usuarios() {
    return this.http.get(`${this.ROOT_SERVE}/api/User`);
  }
}
