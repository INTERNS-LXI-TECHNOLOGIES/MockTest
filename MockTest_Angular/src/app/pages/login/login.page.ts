import { Component, OnInit } from '@angular/core';
import { ModalController,NavController,ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  // username;
  

  postData = {
    'username': '',
    'password': ''
    }
  
  public errorText: string;

  constructor(private modalCtrl: ModalController,
              public menu: MenuController,
              private nav:NavController,
              private auth:AuthService,
              private toastcntrl:ToastController,
              private router: Router) 
    {
      this.errorText = '';
    }

  ngOnInit() {
   
 
  }
 

  // print(event)
  // {
  //   console.log(event);
  //   this.username=event.target.value;
  // }
  // ionViewWillEnter() {
  //   this.menu.enable(false);
  // }

  async loginAction(){
    console.log(this.postData);
        if(this.postData.username && this.postData.password){
          //here i want to use API action



          this.auth.login(this.postData)
          .subscribe(tokenObj=>{
            console.log(tokenObj);
            this.router.navigate(['/menu']);
          },err=>{
            alert("Invalid pwd")
          });
        }
          // console.log(this.postData.username);
          // console.log(this.postData.password);
          //   if(this.auth.login(this.postData)){
          //     this.auth.loginUser(this.postData);
          //          this.router.navigate(['/menu']);
          //    }
          //   } else {
          //     const toast=await this.toastcntrl.create({
          //       message: this.errorText = 'Please give valid data',
          //       duration:2000
          //     });
          //     toast.present();
          //   }
    }


  }
