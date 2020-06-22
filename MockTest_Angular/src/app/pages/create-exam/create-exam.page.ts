import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {required , minLength , minNumber , maxNumber ,RxFormBuilder}  from '@rxweb/reactive-form-validators'

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

class ExamValidator {

  @required()
  @minLength({value:5})
  name: string

  @required()
  count: number

  @required()
    level: string = undefined;
  
  @required()
  @maxNumber({value:24})
  @minNumber({value:0})
  hour : number=0;

  @required()
  @maxNumber({value:60})
  @minNumber({value:0})
  minute : number
}

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.page.html',
  styleUrls: ['./create-exam.page.scss'],
})

export class CreateExamPage implements OnInit {

  createExamForm: FormGroup;
  examValidator: ExamValidator;

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
 
  constructor( private userServ:UsersService,private modalController:ModalController,private router: Router,private formBuilder:RxFormBuilder) { 
   
  }
 
  createExam(form)
  {
   
    this.examData.name=this.createExamForm.value.name;
    this.examData.count=this.createExamForm.value.count;
    this.examData.level=this.createExamForm.value.level;

    this.examData.time=this.createExamForm.value.hour+":"+this.createExamForm.value.minute;
   
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
   this.examValidator = new ExamValidator();
   this.createExamForm = this.formBuilder.formGroup(this.examValidator);
  }

}
