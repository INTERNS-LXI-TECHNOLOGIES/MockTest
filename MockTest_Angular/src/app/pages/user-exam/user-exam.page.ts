import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService} from 'src/app/services/mock-test.service';
import { AttendedOption } from 'src/app/model/AttendedOption';
import {AlertController} from '@ionic/angular';
import { Questions } from '../../model/Questions';
import {Options} from '../../model/Options';
import { Exam} from '../../model/Exam';
import { UsersService } from '../../services/users.service';

// export interface AttendedOptions{
//   id:Questions;
//   opt:string;
// }

@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.page.html',
  styleUrls: ['./user-exam.page.scss'],
})
export class UserExamPage implements OnInit {
  constructor(private acivaterouter:ActivatedRoute,private router:Router,
    private mockSer:MockTestService,private userServ:UsersService,private alertController: AlertController) { 
     
    }

  // attendedOptions:Array<AttendedOption>;
  questions:Array<Questions>;
  options:Array<Options>;
  quest:Questions={
    id:"",
    qstn: "",
    level: "",
    qstnOptions: this.options,
    answered:""
  }
  currentExamId;
  // atndoption:AttendedOptions={
  //     id:this.quest,
  //     opt:""
  //   }
    questionId:string;
  answers=[];
    exam;
     examId
      examTime;
      timerData: any = null;
      ellapsedTime;
      ms=this.ellapsedTime;
      mseconds=0;
  getExam(url:string,id)
  {
    this.mockSer.getDataById(url,id).subscribe(data => {
     this.exam=data;
      console.log(this.exam);
      this.examTime=this.exam?.time;
      this.ellapsedTime = this.examTime;
      this.questions=this.exam?.questions;
      console.log(this.questions);
      this.questions.forEach(x => { this.options=x.qstnOptions; });
     // this.attendedOptions=[];
      this.timerInitialization();
      this.timer();
 
    });
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id'];
      this.getExam('/exam/',id);
      this.currentExamId=id;  
    });
  }

 timerInitialization()
{

if(this.ms==null)
	{
  this.mseconds =<number> <any> this.hourToMiliSeconds(this.examTime);
	}
	else
	{
	this.mseconds=this.ms;
	}
}

timer() {
	this.mseconds = this.mseconds - 1000;
	  if(this.mseconds > 0) {
      this.ellapsedTime= this.millisToMinutesAndSeconds(this.mseconds);
			this.examTime= this.mseconds;
  this.timerData=setTimeout(() => { this.timer(); }, 1000);
    }
     else {
      this.ellapsedTime = 0;	
      console.log(this.ellapsedTime);
       this.presentAlert("TimeOut");
			this.submit();
		}
}

async presentAlert(msg) {
  const alert = await this.alertController.create({
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}

hourToMiliSeconds(hour) {
	let msecond = 0;
	let time = hour.split(':');
	msecond = (time[0] * (60000 * 60)) + (time[1] * 60000);
	return msecond;
}

millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds =<number> <any> ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

selectOption(opt:Options,quest:Questions)
{
  this.questions.forEach(question =>{ if(question.id==quest.id) {
                                        question.qstnOptions.forEach((x) => {
                                        if (x.id == opt.id){
                                          this.saveOptions(opt.id,question) }
                                         });} }  ) ;
}

saveOptions(optid,quest:Questions)
{
this.quest.answered=optid ;
this.answers.push(this.quest.answered);
 console.log(this.answers); 
}

submit()
{
 console.log(this.answers);
 this.ellapsedTime=0;
 this.presentAlert("your test will be submitted");
 this.userServ.saveAnswers(this.answers,this.currentExamId);
}

}