import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/mock-test.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.page.html',
  styleUrls: ['./create-question.page.scss'],
})
export class CreateQuestionPage implements OnInit {

  question:Question={
    qstn:'',
    level:'beginner',
    options:[
      {
        option:'',
        isAnswer:false
      },
      {
        option:'',
        isAnswer:false
      },
      {
        option:'',
        isAnswer:false
      }
    ]
  };

  allLevels=['beginner','intermediate','expert'];

  logForm(form) {
    console.log('question is '+this.question.options[1].isAnswer)
  }
  
  constructor() { }

  ngOnInit() {
    console.log('question is '+this.question.qstn);
  }

}
