import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import{dashboard} from '../model/dashboard';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:8080/api/mocktest-controller";
  imports:[HttpClient]
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(`http://localhost:8080/api/mocktest-controller/all/`);
  }
  
  getUserById(id)
  {
    return this.http.get('http://localhost:8080/api/mocktest-controller/users/'+id);
  }

 getUserDashboardDetails(username)
 {
  return this.http.get<dashboard>(`http://localhost:8080/api/mocktest-controller/user_dashboard/`+username);
 }
  getAllExams(){
    return this.http.get(`http://localhost:8080/api/mocktest-controller/allExamDetails/`);
  }
  getAllAttendedExamDetails(id)
  {
    return this.http.get('http://localhost:8080/api/mocktest-controller/getAllAttendedExamDetails/'+id);
  }
  getPdfviewOfAttendedExamDetail(id)
  {
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json'
       //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get<any>('http://localhost:8080/api/mocktest-controller/examDetailsPDF/'+id,httpOptions);
  }
  getActiveExams()
  {
    return this.http.get(`http://localhost:8080/api/mocktest-controller/activeExams/`);
  }
}
