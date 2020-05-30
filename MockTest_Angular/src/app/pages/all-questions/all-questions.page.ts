import { Component, OnInit } from '@angular/core';
import { MockTestService, Question } from 'src/app/mock-test.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.page.html',
  styleUrls: ['./all-questions.page.scss'],
})
export class AllQuestionsPage implements OnInit {

  constructor(private mockSer:MockTestService) { }
  
  allQuestions=this.mockSer.getDataFromServer("/app/allQuestions");

  ngOnInit() {
  }

}
