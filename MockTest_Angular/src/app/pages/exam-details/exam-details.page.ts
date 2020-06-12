import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.page.html',
  styleUrls: ['./exam-details.page.scss'],
})
export class ExamDetailsPage implements OnInit {
  selectedExamData;
  constructor(private acivaterouter:ActivatedRoute, private userServ:UsersService) { }
  selectExam(id)
  {
    this.userServ.getSelectedExamDetails(id).subscribe(res => {
      console.log(res);
      this.selectedExamData=res;
    },
    error => console.log(error)
    );
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.selectExam(id);
    });
  }

}
