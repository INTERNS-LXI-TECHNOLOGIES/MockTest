import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MocktestControllerResourceService } from 'src/app/services/services';

@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.page.html',
  styleUrls: ['./exam-history.page.scss'],
})
export class ExamHistoryPage implements OnInit {
  attendedExam;
  constructor(private acivaterouter:ActivatedRoute,private mockController:MocktestControllerResourceService) { }

  attendedExamDetail(id)
  {
    this.mockController.attendedExamByIdUsingGET(id).subscribe(data => {
      this.attendedExam=data;
      console.log(this.attendedExam);
    });
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get examHistory details..!
     this.attendedExamDetail(id);

    });
  }

}