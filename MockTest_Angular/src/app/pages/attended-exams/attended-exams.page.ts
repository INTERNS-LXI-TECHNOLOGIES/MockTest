import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-attended-exams',
  templateUrl: './attended-exams.page.html',
  styleUrls: ['./attended-exams.page.scss'],
})
export class AttendedExamsPage implements OnInit {

  constructor(private userServ:UsersService) { }
  attendedExamdata;
  attendedExams()
  {
    this.userServ.getAttendedExamDetails().subscribe(data => {
      console.log(data);
      this.attendedExamdata=data});
  }
  ngOnInit() {
    this.attendedExams();
  }

}
