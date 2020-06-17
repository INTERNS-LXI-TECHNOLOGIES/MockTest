import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService,Question} from 'src/app/services/mock-test.service';
import { AttendedOption } from 'src/app/model/AttendedOption';
import {AlertController} from '@ionic/angular';
import { QuestionPage } from '../question/question.page';
export interface AttendedOptions{
  id:String;
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

  //  atndOptions: Array<AttendedOptions>;
  question:Array<Question>;
   attendedOptions:AttendedOption[];
    atndoption:AttendedOptions={
      id:"",
      opt:""
    }
  
     examId;
     exam;
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

onSelect(opt)
{
 

this.attendedOptions.push(opt);
console.log(this.attendedOptions);
console.log(opt)
}
submit()
{
 
}
 /* ............................................................................................ */



}
