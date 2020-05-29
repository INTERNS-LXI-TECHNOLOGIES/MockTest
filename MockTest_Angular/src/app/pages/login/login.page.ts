import { Component, OnInit } from '@angular/core';
import { ModalController,NavController,ToastController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // data;
  // username;
  
  userdata={}
  postData = {
    'username': '',
    'password': ''
    }
    public errorText: string;

  constructor(private modalCtrl: ModalController,
              private userServ:UsersService,
              public menu: MenuController,
              private nav:NavController,
              private auth:AuthService,
              private toastcntrl:ToastController,
              private router: Router) 
    {
      this.errorText = '';
    }

  ngOnInit() {
   
    //  this.users();
  }
  
  public async navigateToHome() {
    
    // this.auth.loginUser(this.userdata).subscribe(res => console.log(res),
    // err=>console.log(err));

    this.auth.loginUser(this.postData);
    console.log(this.auth.loginUser(this.userdata));
   this.router.navigate(['/home']);
    }
  
  // users()
  // {
  //   this.userServ.getData().subscribe(data => {
  //     console.log(data);
  //     this.data=data;
      
  //   });
  // }

  // print(event)
  // {
  //   console.log(event);
  //   this.username=event.target.value;
  // }
  // ionViewWillEnter() {
  //   this.menu.enable(false);
  // }

  async loginAction(){
    
        if(this.postData.username && this.postData.password){
          this.auth.loginUser(this.postData);
          console.log(this.postData.username);
          console.log(this.postData.password);
            if(this.auth.login(this.postData)){
                   this.router.navigate(['/home']);
             }
            } else {
              const toast=await this.toastcntrl.create({
                message: this.errorText = 'Please give valid data',
                duration:2000
              });
              toast.present();
            }
    }

}
