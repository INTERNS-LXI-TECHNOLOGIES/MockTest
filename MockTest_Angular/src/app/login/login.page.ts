import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FolderPage } from '../folder/folder.page';
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
 
  
  constructor(private modalCtrl: ModalController,
    private userServ:UsersService,public menu: MenuController,
    public router: Router) {}

  ngOnInit() {
   
     this.users();
  }
  signIn(){
    this.router
      .navigateByUrl('../adminpage/adminpage.module', { replaceUrl: true })
  }
  users()
  {
    this.userServ.getData().subscribe(data => {
      console.log(data);
      this.data=data;
      
    });
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }

  

}
