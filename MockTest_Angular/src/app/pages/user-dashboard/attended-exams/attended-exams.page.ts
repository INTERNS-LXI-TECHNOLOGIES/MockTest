import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import {AuthService} from '../../../services/auth.service';
import {Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import{attendedExam} from '../../../model/attendedExam';
import { dashboard } from '../../../model/dashboard';
@Component({
  selector: 'app-attended-exams',
  templateUrl: './attended-exams.page.html',
  styleUrls: ['./attended-exams.page.scss'],
})
export class AttendedExamsPage implements OnInit {

  
  data:object;
 login:String;
 examlist: Array<attendedExam>;
  sortedData:Array<attendedExam>;

  examData:attendedExam={
    examId:"",
    examName:"",
    score : "",
    total:"",
    percentage:"" ,
    result:"",
    date:"",
    time:"",
  }
  dashboardData:dashboard={
    currentUser:"",
    userId:"",
    attendedExamList:this.examlist
  }
  constructor(private userServ:UsersService,private auth:AuthService,private router: Router) {
     }
 
 
  attendedExams()
  {
    this.userServ.getUserDashboardDetails(this.login).subscribe(data => {
      console.log(data);
      this.dashboardData=data
      this.examlist=this.dashboardData.attendedExamList;
      console.log(this.examlist);
       this.sortedData = this.examlist.slice();
     
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
 sortData(sort: Sort) {
  const data = this.examlist.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'examName': return compare(a.examName, b.examName, isAsc);
      case 'percentage': return compare(a.percentage, b.percentage, isAsc);
      case 'date': return compare(a.date, b.date, isAsc);
      default: return 0;
    }
   });
  }

 }
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


