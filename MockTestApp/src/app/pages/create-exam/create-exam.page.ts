import { Component, OnInit } from '@angular/core';
import { Exam } from '../../services/models/exam';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { MocktestControllerResourceService } from 'src/app/services/services';

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

  exam:Exam={
    id: 0,
    name: "", 
    count:0,
    level: "", 
    isActive:false
   
  }

  allLevels=['beginner','intermediate','expert'];
  Hour=['0','1','2','3','4','5','6','7','8','9','10','11','12'];
  Minute=['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25',
          '26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51',
          '51','52','53','54','55','56','57','58','59','60'];

  constructor(private mockController:MocktestControllerResourceService,
    private modalController:ModalController,private router: Router,
    private alertController: AlertController) { }
    
  createExam(form)
  {
   
    this.exam.time=this.timeData.hour+":"+this.timeData.minute;
    console.log(this.exam.time);
    console.log(this.exam);
    this.mockController.saveExamUsingPOST(this.exam).subscribe(data => {
      let res = data;
      console.log(res);
      if(res===false)
      {
        this.presentAlert("less no of question in database");
          // alert("less no of question in database");
      }
      else{
      // alert("Exam created");
      this.presentAlertConfirm("Exam Created");
    this.router.navigateByUrl('menu/exam');} }
  );
  err=> {
   this.presentAlert('Something went wrong');
  }
 
   
   
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
  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      message:  msg,
      buttons: ['OK']
    
    });
  
    await alert.present();
  }
  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
    
      message: msg,
      buttons: [
          {
          text: 'Ok',
          handler: () => {
            this.dismiss();
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  }
}
