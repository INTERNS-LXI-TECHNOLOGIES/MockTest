import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { MockTestService } from 'src/app/services/mock-test.service';
import { attendedExam } from 'src/app/model/attendedExam';
@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.page.html',
  styleUrls: ['./exam-history.page.scss'],
})
export class ExamHistoryPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,private mockSer:MockTestService) { }
  // id=this.acivaterouter;
  attendedExam=this.mockSer.getDataFromApi('/attendedExam/1').subscribe(data => {
    console.log(data);
    return data;    
  });


  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get examHistory details..!
      return id;
    });
  }

}
