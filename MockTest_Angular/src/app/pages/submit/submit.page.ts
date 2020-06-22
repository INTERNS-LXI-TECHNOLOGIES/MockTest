import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  userResult;
  userDetails;
  constructor(private userServ:UsersService) { }
  getResult()
  {
    this.userResult=this.userServ.getResult();
    console.log(this.userResult);
    this.userDetails=this.userServ.getCurrentUser();
    console.log(this.userDetails);
  }
  ngOnInit() {
    this.getResult();
  }

}
