import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';

import{Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MocktestControllerResourceService,AccountResourceService  } from 'src/app/services/services';
import {ThemeService} from 'src/app/services/services/ThemeService/theme.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public isToggled: boolean;
  loggedUser;
  loggedUserName;

  constructor(public navController: NavController, private router:Router,
    private accountService: AccountService, private loginService: LoginService,
    private mockController:MocktestControllerResourceService,
    private accSer:AccountResourceService,
    private theme:ThemeService) {}


  public userInfo:object;
   userRole;
   activeExams;

   logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
        this.navController.navigateBack('');
      }


  startExam(id){
    this.router.navigate(['menu/exam-start/'+id]);
  }
  params;
  getUserDetails()
  {
    this.accSer.getAccountUsingGET().subscribe(resp=>{
      console.log('user info=>home');
      console.log(resp);
      this.loggedUser=resp;
      this.loggedUserName=resp.firstName;
    this.params={
        name:this.loggedUserName
      }
    });
  }

 
 
  ngOnInit() {

    this.mockController.activeExamsUsingGET().subscribe(data=>{
      console.log(data);
      this.activeExams=data;
      this.getUserDetails();
    })

   
  
  }
  onChangeToggle(ev: CustomEvent) {
    if(this.isToggled)
    this.theme.enableDark();
    else
    this.theme.enableLight();
  }

}



