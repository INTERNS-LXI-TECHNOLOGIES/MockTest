import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MocktestControllerResourceService } from 'src/app/services/services';
@Component({
  selector: 'app-exam-analysis',
  templateUrl: './exam-analysis.page.html',
  styleUrls: ['./exam-analysis.page.scss'],
})
export class ExamAnalysisPage implements OnInit {
  exam;
  constructor(private mockController:MocktestControllerResourceService,
    private router: Router) {

     }
     getAllExam() {
       this.mockController.getAllExamDetailsUsingGET().subscribe(data => {
        console.log(data);
        this.exam=data    
      });
     }
     examDetaills(id)
     {
      console.log("method call" +id);
    this.router.navigate(['menu/attended-exam-details',id]);
     }
  ngOnInit() {
    this.getAllExam();
  }

}
