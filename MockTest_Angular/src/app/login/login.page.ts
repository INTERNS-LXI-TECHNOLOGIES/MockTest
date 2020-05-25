import { Component, OnInit } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';
import{AdminpagePage} from '../adminpage/adminpage.page';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data;
  username;
 
  
  constructor(private modalCtrl: ModalController,
    private userServ:UsersService,public menu: MenuController,private nav:NavController,
    private router: Router) {}

  ngOnInit() {
   
     this.users();
  }
  
  signIn(){
    // this.nav.navigateRoot(AdminpagePage);
    // this.router.navigate=(['/adminpage']);
    }
  users()
  {
    this.userServ.getData().subscribe(data => {
      console.log(data);
      this.data=data;
      
    });
  }
  print(event)
  {
    console.log(event);
    this.username=event.target.value;
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }

  

}
