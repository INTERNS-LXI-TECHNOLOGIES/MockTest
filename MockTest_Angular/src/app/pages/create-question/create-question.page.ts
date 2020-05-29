import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/mock-test.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.page.html',
  styleUrls: ['./create-question.page.scss'],
})
export class CreateQuestionPage implements OnInit {

  question:Question;
  
  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }

}
