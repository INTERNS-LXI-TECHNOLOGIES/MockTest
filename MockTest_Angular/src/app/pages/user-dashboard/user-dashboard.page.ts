import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import{AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {

  constructor(private userServ:UsersService,private auth:AuthService) { }
  data;
  id;
  users()
  {
    // this.userServ.getUserById('http://localhost:8080/api/mocktest-controller/users/'+this.id).subscribe(data => {
      this.userServ.getUserById(this.id).subscribe(data => {
      console.log(data);
      this.data=data});
    
  
   
  }
  ngOnInit() {
    this.auth.getUserInfo().then(userData => {
      console.log(userData);
      this.id=userData.id;
      console.log(this.id);
      this.users(); 
    })
  
  }

}
