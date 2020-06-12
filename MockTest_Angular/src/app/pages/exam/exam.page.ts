import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  examData;
  constructor(private userServ:UsersService) { }
  getAllExam() {
    this.userServ.getAllExams().subscribe(data => {
      console.log(data);
      this.examData=data    
    });
   }
  ngOnInit() {
    this.getAllExam();
  }

}
