import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
export interface Exam
{
  name:String,
  count,
  level:string,
 time:string;  
}
export interface Time
{
  hour:string,
  minute:string
}

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.page.html',
  styleUrls: ['./create-exam.page.scss'],
})

export class CreateExamPage implements OnInit {
  timeData:Time={
    hour:"",
    minute:""
  }

  examData:Exam={
    name:"",
    level:'',
   time:'',
    count:""

  }

  allLevels=['beginner','intermediate','expert'];
  Hour=['0','1','2','3','4','5','6','7','8','9','10','11','12'];
  Minute=['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
  constructor( private userServ:UsersService,private modalController:ModalController,private router: Router) { }
  createExam(form)
  {
    console.log(this.examData);
    this.examData.time=this.timeData.hour+":"+this.timeData.minute;
   
    console.log(this.examData.time);
    console.log(this.examData);
    console.log(this.timeData.hour);
    console.log(this.timeData.minute);
 
   this.userServ.saveExam(this.examData)
    // this.dismiss();
    //this.router.navigateByUrl('/menu/exam');
   
  }
dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
   
  }

}
