import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { Exam } from '../../services/models/exam';
import { MocktestControllerResourceService } from 'src/app/services/services';
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
    private mockController:MocktestControllerResourceService) { }

  selectExam(id)
  {
    this.mockController.getExamByIdUsingGET(id).subscribe(res => {
      console.log(res);
      this.selectedExamData=res;
      this.isToggled = this.selectedExamData?.exam?.isActive;
      this.exam=this.selectedExamData?.exam;
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
    this.mockController.updateExamUsingPUT1(this.exam);

  }
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.selectExam(id);
    
    });
  }

}
