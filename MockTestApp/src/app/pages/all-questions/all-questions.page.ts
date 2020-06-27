import { Component, OnInit } from '@angular/core';
import { MocktestControllerResourceService } from 'src/app/services/services';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.page.html',
  styleUrls: ['./all-questions.page.scss'],
})
export class AllQuestionsPage implements OnInit {

  constructor(private mockController:MocktestControllerResourceService) { }
  
  allQuestions;
  ngOnInit() {
    this.mockController.getAllQuestionsUsingGET().subscribe(data=>{
      console.log(data);
      this.allQuestions=data;
    });
  }

}
