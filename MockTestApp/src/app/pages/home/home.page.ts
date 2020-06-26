import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';
// import { MockTestService } from '../../services/mock-test.service';
// import{AuthService} from '../../services/auth.service';
import{Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MocktestControllerResourceService } from 'src/app/services/services';
// import { UsersService } from '../../services/users.service';
// import { MocktestControllerResourceService } from 'src/app/api/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public navController: NavController, private router:Router,
    private accountService: AccountService, private loginService: LoginService,
    private mockController:MocktestControllerResourceService) {}

  // url:string='http://localhost:8080/api/mocktest-controller/';
  // questions:any=this.mockTestSer.getDataFromServer('http://localhost:8080/api/questions/');
  // userRole=this.mockTestSer.getStringFromServer(this.url);

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

//  registerId;
  // constructor(private mockTestSer: MockTestService,private http: HttpClient,
  //   private route: ActivatedRoute,private userServ:UsersService,private auth:AuthService,private router:Router,
  //   private mockser:MocktestControllerResourceService) { }

//   getActiveExams()
//   {
//     this.userServ.getActiveExams().subscribe(response => {
//       this.activeExams=response;
//       console.log(this.activeExams);
//     });
//   }

  startExam(id){
    this.router.navigate(['menu/exam-start/'+id]);
  }
 
  ngOnInit() {
    this.mockController.activeExamsUsingGET().subscribe(data=>{
      console.log(data);
      this.activeExams=data;
    })

    // this.isAuthenticated();
    // this.auth.getUserInfo().then(userData => {
    //   console.log(userData);
    //   this.userInfo=userData;
      // this.id=userData.id;
     
    // })
   
    // this.getActiveExams();
  
  }

}




// import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { AccountService } from 'src/app/services/auth/account.service';
// import { LoginService } from 'src/app/services/login/login.service';
// import { Account } from 'src/model/account.model';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   account: Account;

//   constructor(public navController: NavController, private accountService: AccountService, private loginService: LoginService) {}

//   ngOnInit() {
//     this.accountService.identity().then((account) => {
//       if (account === null) {
//         this.goBackToHomePage();
//       } else {
//         this.account = account;
//       }
//     });
//   }

//   isAuthenticated() {
//     return this.accountService.isAuthenticated();
//   }

//   logout() {
//     this.loginService.logout();
//     this.goBackToHomePage();
//   }

//   private goBackToHomePage(): void {
//     this.navController.navigateBack('');
//   }
// }
