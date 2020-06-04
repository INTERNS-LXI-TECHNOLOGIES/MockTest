import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
// import {Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import{attendedExam} from '../../model/attendedExam';
@Component({
  selector: 'app-attended-exams',
  templateUrl: './attended-exams.page.html',
  styleUrls: ['./attended-exams.page.scss'],
})
export class AttendedExamsPage implements OnInit {

  constructor(private userServ:UsersService,private auth:AuthService,private router: Router) { }
 
  examData:attendedExam={
    examName:"",
    score : "",
    total:"",
    percentage:"" ,
    result:"",
    date:"",
    time:"",
  }

  data:object;
 public login:String;
 
  attendedExams()
  {
    this.userServ.getUserDashboardDetails(this.login).subscribe(data => {
      console.log(data);
     this.data=data
      console.log(this.examData);

     
    });
  }
  ngOnInit() {
    
    this.auth.getUserInfo().then(userData => {
      this.login=userData.name;
      this.attendedExams();
      
    })

  }
  
 examHistory(id)
 {
  console.log("method call" +id);
  this.router.navigate(['/exam-history',id]);
 
 }

}
