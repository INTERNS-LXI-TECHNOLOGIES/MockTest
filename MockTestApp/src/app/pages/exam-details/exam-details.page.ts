import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { Exam } from '../../services/models/exam';
import { MocktestControllerResourceService } from 'src/app/services/services';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.page.html',
  styleUrls: ['./exam-details.page.scss'],
})
export class ExamDetailsPage implements OnInit {
  selectedExamData;
  exam:Exam={
    id: 0,
    name: "", 
    count:0,
    level: "", 
    isActive:false
   
  }
  public isToggled: boolean;
  constructor(private acivaterouter:ActivatedRoute, 
    private mockController:MocktestControllerResourceService,
    private router:Router,private alertController: AlertController) { }

  selectExam(id)
  {
    this.mockController.getExamByIdUsingGET(id).subscribe(res => {
      console.log(res);
      this.selectedExamData=res;
      this.isToggled = this.selectedExamData?.isActive;
     this.exam=this.selectedExamData;
      console.log(this.exam);
      console.log("Toggled: "+ this.isToggled); 
    },
    error => console.log(error)
    );
  }
  public notify() {
   this.exam.isActive=this.isToggled;
   console.log("exam:" +this.exam.isActive);
   console.log(this.exam);
    console.log("Toggled: "+ this.isToggled); 
    this.mockController.updateExamUsingPUT1(this.exam).subscribe(data => {
      
      // alert("exam updated"); 
      this.presentAlert('Exam Updated');
      this.router.navigateByUrl('menu/exam');} 
     );
    err=> {
      this.presentAlert('Something went wrong');
    }

  }
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.selectExam(id);
    
    });
  }
  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      message:  msg,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
