import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.page.html',
  styleUrls: ['./exam-history.page.scss'],
})
export class ExamHistoryPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute) { }

  ngOnInit() {

    // this.acivaterouter.params.subscribe(params => {
    //   let id = params['id'];
    
    //   console.log(`${id}`);
    //   });
  }

}
