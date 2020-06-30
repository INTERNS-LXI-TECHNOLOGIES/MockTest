import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/services/models';
import { MocktestControllerResourceService } from 'src/app/services/services';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.page.html',
  styleUrls: ['./create-question.page.scss'],
})
export class CreateQuestionPage implements OnInit {
  constructor(private mockController:MocktestControllerResourceService,
    private router:Router,private alertController: AlertController) { }
  
  question:Question={
    qstn:'',
    level:'beginner',
    qstnOptions:[
      {
        option:'',
        isAnswer:false
      },
      {
        option:'',
        isAnswer:false
      },
      {
        option:'',
        isAnswer:false
      }
    ]
  };

  allLevels=['beginner','intermediate','expert'];

  logForm(form) {
    console.log('question is '+this.question.qstnOptions[1].isAnswer);
    this.mockController.createQuestionUsingPOST(this.question).subscribe(()=>{
      this.presentAlert('successfully created question');
      this.router.navigateByUrl('menu/question');
    });
  }

  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      message:  msg,
      buttons: ['OK']
    });
    await alert.present();
  } 

  ngOnInit() {
    console.log('question is '+this.question.qstn);
  }

}
