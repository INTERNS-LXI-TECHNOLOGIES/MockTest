import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService} from 'src/app/services/mock-test.service';
import { AttendedOption } from 'src/app/model/AttendedOption';
import {AlertController} from '@ionic/angular';
import { Questions } from '../../model/Questions';
import {Options} from '../../model/Options';
import { Exam} from '../../model/Exam';

export interface AttendedOptions{
  id:Questions;
  opt:string;
}

@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.page.html',
  styleUrls: ['./user-exam.page.scss'],
})
export class UserExamPage implements OnInit {
  constructor(private acivaterouter:ActivatedRoute,private router:Router,
    private mockSer:MockTestService,private alertController: AlertController) { 
     
    }

  attendedOptions:Array<AttendedOption>;
  questions:Array<Questions>;
  options:Array<Options>;
  quest:Questions={
    id:"",
    qstn: "",
    level: "",
    qstnOptions: this.options,
    answered:""
  }
  atndoption:AttendedOptions={
      id:this.quest,
      opt:""
    }
    questionId:string;
    ans;
     answer = [];
  answers=[];
    exam;
     examId;
     count;
  /* Edit by pushkala */
      examTime;
      timerData: any = null;
      ellapsedTime;
      ms=this.ellapsedTime;
    // ms;
      mseconds=0;
      
  /* ................. */
  getExam(url:string,id)
  {
    this.mockSer.getDataById(url,id).subscribe(data => {
     this.exam=data;
      console.log(this.exam);
    
     
      /* Edit by pushkala */
      this.examTime=this.exam?.time;
      this.ellapsedTime = this.examTime;
      this.count=this.exam?.questions.length;
      console.log(this.count);
      this.questions=this.exam?.questions;
      console.log(this.questions);
      this.questions.forEach(x => { this.options=x.qstnOptions; console.log(this.options); });
      this.attendedOptions=[];
      this.timerInitialization();
      this.timer();
   // this.timer = setInterval(() => { this.timer1(); }, 1000);
    
      /* ................. */
    });
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id'];
      this.getExam('/exam/',id);  
    });
  }

 


 /* Edit by pushkala .....................................................*/

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
       this.presentAlert();
			this.submit();
		}
}
async presentAlert() {
  const alert = await this.alertController.create({
    message: 'Time Out.',
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



mcqAnswer()
{

 console.log(this.atndoption.opt);

 // this.attendedOptions.push(opt);
//console.log(this.atndoption);
  //  console.log(value);
}
selectOption(opt:Options,quest:Questions)
{
  // this.questions.forEach(question =>{ this.options=question.qstnOptions;
  //   if(question.id==quest) {
  //   this.options.forEach((x) => { if (x.id !== opt) x.is_Selected = false; });
  //  }
  // })
  // if (x.id !== opt.id)
  

  this.questions.forEach(question =>{ if(question.id==quest.id) {
                                       
                                        question.qstnOptions.forEach((x) => {
                                       
                                        if (x.id == opt.id){
                                          this.saveOptions(opt.id,question) }
                                   //   this.ans=x.option;this.answer.push(this.ans); }
                                        console.log(x.id == opt.id);
                                         }
                                          );}  
  }  ) ;
// console.log(this.answer);
// console.log(this.answers);
// 
}
// setQuestion(id)
// {
//   this.questionId=id;
//   console.log("question id"+id);
// }
// getQuestion()
// {
//   return this.questionId;
//  }
saveOptions(optid,quest:Questions)
{
 if(this.atndoption.opt) 
{  
  this.questions.push(this.atndoption.id)
this.quest.answered=optid ;
console.log("new q"+this.quest.answered)
// this.answers.push(this.quest.answered);
}
else {
this.quest.answered="";
console.log("exist q"+this.quest.answered)
}
// console.log(this.answers); 
}
submit()
{
 console.log(this.answers);
}
 /* ............................................................................................ */

}