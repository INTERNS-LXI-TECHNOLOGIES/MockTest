import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-start',
  templateUrl: './exam-start.page.html',
  styleUrls: ['./exam-start.page.scss'],
})
export class ExamStartPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,private router:Router) { }
  examId;

  examPage()
  {
    this.router.navigate(['menu/exam-page/'+this.examId]);
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get examHistory details..!
      this.examId=id;
    });
  }

}
