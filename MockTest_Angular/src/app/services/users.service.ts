import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  imports:[HttpClient]
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(`http://localhost:8080/api/mocktest-controller/all/`);
    
  }
}