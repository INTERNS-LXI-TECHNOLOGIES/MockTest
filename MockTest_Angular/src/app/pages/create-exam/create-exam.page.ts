import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

export interface Exam
{
  name:String,
  count,
  level:string,
  time;    
}

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.page.html',
  styleUrls: ['./create-exam.page.scss'],
})

export class CreateExamPage implements OnInit {

  examData:Exam={
    name:"",
    level:'beginner',
    time:"",
    count:""

  }
  allLevels=['beginner','intermediate','expert'];
  constructor( private userServ:UsersService) { }
  createExam(form)
  {
    this.userServ.saveExam(this.examData)
    console.log(this.examData);
  }

  ngOnInit() {
   
  }

}
