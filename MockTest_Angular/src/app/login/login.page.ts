import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FolderPage } from '../folder/folder.page';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data;
 
  constructor(private modalCtrl: ModalController,
    private userServ:UsersService) {}

  ngOnInit() {
   
     this.users();
  }
  signIn(){
   
  }
  users()
  {
    this.userServ.getData().subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
