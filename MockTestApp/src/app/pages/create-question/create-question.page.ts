import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/services/models';
import { MocktestControllerResourceService } from 'src/app/services/services';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.page.html',
  styleUrls: ['./create-question.page.scss'],
})
export class CreateQuestionPage implements OnInit {

  question:Question={
    qstn:'',
    level:'beginner',
    qstnOptions:[
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
    console.log('question is '+this.question.qstnOptions[1].isAnswer);
    this.mockController.createQuestionUsingPOST(this.question); 
  }
  
  constructor(private mockController:MocktestControllerResourceService) { }

  ngOnInit() {
    console.log('question is '+this.question.qstn);
  }

}
