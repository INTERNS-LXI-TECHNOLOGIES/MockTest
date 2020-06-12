import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  examData;
  constructor(private userServ:UsersService,private router: Router) { }
  getAllExam() {
    this.userServ.getAllExams().subscribe(data => {
      console.log(data);
      this.examData=data    
    });
   }
   examDetaills(id)
   {
     console.log(id);
     this.router.navigate(['menu/exam-details',id]);
   }
  ngOnInit() {
    this.getAllExam();
  }
click()
{
  console.log("clicked ")
}
}
