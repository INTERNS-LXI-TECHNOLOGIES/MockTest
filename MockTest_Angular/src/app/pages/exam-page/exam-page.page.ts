import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService } from 'src/app/services/mock-test.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.page.html',
  styleUrls: ['./exam-page.page.scss'],
})
export class ExamPagePage implements OnInit {
  constructor(private acivaterouter:ActivatedRoute,private router:Router,
    private mockSer:MockTestService) { }

  examId;

  

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; 
      this.examId=id;
    });
  }

}
