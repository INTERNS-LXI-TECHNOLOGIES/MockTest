import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {ExamData} from '../../model/ExamData';
@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.page.html',
  styleUrls: ['./exam-details.page.scss'],
})
export class ExamDetailsPage implements OnInit {
  selectedExamData;
  exam:ExamData={
    id: "",
    name: "", 
    count:"",
    level: "", 
    isActive:false
   
  }
  public isToggled: boolean;
  constructor(private acivaterouter:ActivatedRoute, private userServ:UsersService) { }
  selectExam(id)
  {
    this.userServ.getSelectedExamDetails(id).subscribe(res => {
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
    this.userServ.updateExam(this.exam);

  }
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.selectExam(id);
    
    });
  }

}
