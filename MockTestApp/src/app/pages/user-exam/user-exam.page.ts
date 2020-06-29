import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
// import { UsersService } from '../../services/users.service';
import { Question, QstnOption } from 'src/app/services/models';
import { MocktestControllerResourceService, AccountResourceService } from 'src/app/services/services';


@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.page.html',
  styleUrls: ['./user-exam.page.scss'],
})
export class UserExamPage implements OnInit {
  constructor(private acivaterouter:ActivatedRoute,private router:Router,
    private mockController:MocktestControllerResourceService,
    private accRes:AccountResourceService,
    private alertController: AlertController) {}

    params:MocktestControllerResourceService.SaveOptionUsingPOSTParams;
  questions:Array<Question>;
  options:Array<QstnOption>;
  quest:Question={
    id:0,
    qstn: "",
    level: "",
    qstnOptions: this.options,
    // answered:""
  }
  currentExamId;
  questionId:string;
  answers=[];
  exam;
  examTime;
  timerData: any = null;
  ellapsedTime;
  ms=this.ellapsedTime;
  mseconds=0;
  user;

  getExam(id)
  {
    this.mockController.getExamByIdUsingGET(id).subscribe(data => {
     this.exam=data;
      console.log(this.exam);
      this.examTime=this.exam?.time;
      this.ellapsedTime = this.examTime;
      console.log(this.ellapsedTime);
      this.questions=this.exam?.questions;
      console.log(this.questions);
      this.questions.forEach(x => { this.options=x.qstnOptions; });
      this.timerInitialization();
      if(this.ellapsedTime!=0){
          this.timer();
      }
      
    });
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id'];
      this.getExam(id);
      this.currentExamId=id;  
    });
    this.accRes.getAccountUsingGET().subscribe(u=>{
      this.user=u;
    })
    
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
       this.presentAlert("Time Out");
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

selectOption(opt:QstnOption,quest:Question)
{
  this.questions.forEach(question =>{ 
    if(question.id==quest.id) {
    question.qstnOptions.forEach((x) => {
    if (x.id == opt.id){
      this.saveOptions(opt.id,question) }
  });} }  ) ;
}

saveOptions(optid,quest:Question)
{
// this.quest.answered=optid ;
this.answers.push(optid);
 console.log(this.answers); 
}

submit()
{
  // let user=this.Home.loggedUser;
  // this.mseconds=0;
  this.ellapsedTime=0;
  //this.examTime=0;
 this.params={user:this.user,
      eId:this.currentExamId,
      answers:this.answers};
      console.log(this.user);
      console.log(this.answers);
 this.mockController.saveOptionUsingPOST(this.params).subscribe(()=>{
  this.presentAlert('exam submitted successfully');
  this.router.navigateByUrl('menu');
});
}

}