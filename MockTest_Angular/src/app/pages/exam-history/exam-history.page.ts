import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { MockTestService } from 'src/app/services/mock-test.service';
@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.page.html',
  styleUrls: ['./exam-history.page.scss'],
})
export class ExamHistoryPage implements OnInit {
  attendedExam;
  constructor(private acivaterouter:ActivatedRoute,private mockSer:MockTestService) { }

  attendedExamDetail(url:string,id)
  {
    this.mockSer.getDataById(url,id).subscribe(data => {
      this.attendedExam=data;
      console.log(this.attendedExam);
    });
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get examHistory details..!
     this.attendedExamDetail('/attendedExam/',id);

    });
  }

}