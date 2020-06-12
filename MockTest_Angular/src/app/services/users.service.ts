import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import{dashboard} from '../model/dashboard';
import { Exam } from '../pages/create-exam/create-exam.page';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:8080/api/mocktest-controller";
  private pdfId;
  imports:[HttpClient]
  constructor(private http: HttpClient,private router:Router) { }

  setPdfId(id)
  {
    this.pdfId=id;
    console.log("id from service"+id);
  }
  getPdfId()
  {
    return this.pdfId;
  }
  
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
  getSelectedExamDetails(id)
  {
    return this.http.get('http://localhost:8080/api/mocktest-controller/getSelectedExamDetails/'+id);
  }
  saveExam(exam:Exam)
  {
    console.log(exam);

    this.http.post('http://localhost:8080/api/mocktest-controller/create_exam/',exam).subscribe(()=>{alert("Exam created");
    this.router.navigateByUrl('/menu/exam');}
  );
  err=> {
    alert("something went wromg..!" );
  }
  }
}
