import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../../services/users.service';
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
    // private userServ:UsersService,
    private router: Router) { }
  getResult()
  {
    // this.userResult=this.userServ.getResult();
    console.log(this.userResult);
    // this.userDetails=this.userServ.getCurrentUser();
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
