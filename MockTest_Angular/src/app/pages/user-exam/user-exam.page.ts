import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService } from 'src/app/services/mock-test.service';
import { AttendedOption } from 'src/app/model/AttendedOption';
import {AlertController} from '@ionic/angular';
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
      this.timer = setInterval(() => { this.timer1(); }, 1000);
     
    }
    atndoption:AttendedOptions={
      id:"",
      opt:""
    }
  examId;
  exam;
  /* Edit by pushkala */
      examTime;
      timer: any = null;
      ellapsedTime;
      ms=this.ellapsedTime;
      mseconds=0;
      
  /* ................. */
  getExam(url:string,id)
  {
    this.mockSer.getDataById(url,id).subscribe(data => {
      this.exam=data;
      console.log(this.exam);

      /* Edit by pushkala */
      this.examTime=this.exam?.time;
     
      console.log(this.examTime);
   
      this.ellapsedTime = this.examTime;
      this.tick();
    ///  this.timer1();
    
      /* ................. */
    });
  }

  attendedOptions:AttendedOption[];

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id'];
      this.getExam('/exam/',id);
    });
  }


 /* Edit by pushkala .....................................................*/

tick()
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


timer1() {
	this.mseconds = this.mseconds - 1000;
	  if(this.mseconds > 0) {
      this.ellapsedTime= this.millisToMinutesAndSeconds(this.mseconds);
      
			this.examTime= this.mseconds;
			  window.setTimeout("timer1()" , 1000);
    }
     else {
      this.ellapsedTime = 0;	
      setTimeout(() => {
       this.presentAlert();
      }, 2000);
    
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

submit()
{
  let attendedOptions = [];
    this.exam.questions.forEach(x => attendedOptions.push({ 'questionId': x.id ,'answered': this.atndoption.opt}));
    console.log(attendedOptions);
}
 /* ............................................................................................ */



}
