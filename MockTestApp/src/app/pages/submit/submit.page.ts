import { Component, OnInit } from '@angular/core';
import { MocktestControllerResourceService, AccountResourceService} from 'src/app/services/services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  userResult;
  userDetails;
  constructor(
    private mockController:MocktestControllerResourceService,
    private accRes:AccountResourceService,
    private router: Router) { }
  getResult()
  {
    this.userResult=this.mockController.getResult();
    console.log(this.userResult);
    this.accRes.getAccountUsingGET().subscribe(u=>{
      this.userDetails=u;
    })
    console.log(this.userDetails);
  }
  ngOnInit() {
    this.getResult();
  }
  reviewResult()
  {
    this.router.navigate(['menu/exam-history',this.userResult?.id]);
  }

}
