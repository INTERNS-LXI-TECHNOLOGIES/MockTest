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

  data:any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '../folder/Home',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
   
  ];
 
  constructor(private modalCtrl: ModalController,
    private userServ:UsersService) {}

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
  async signIn(){
    const modal = await this.modalCtrl.create({
      component: FolderPage,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    });
    return await modal.present();
  }
  users()
  {
    this.userServ.getData().subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
