import { Component, OnInit } from '@angular/core';
import { MockTestService } from '../../mock-test.service';
import{AuthService} from '../../services/auth.service';
import{Router} from '@angular/router';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  public adminPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
    {
     
      title: 'question',
      url: '/question',
      icon: 'mail'
    },
    {
      title: 'exam',
      url: '/exam',
      icon: 'paper-plane'
    },
    {
      title: 'users',
      url: '/users',
      icon: 'heart'
    }
  ];

  public userPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
 
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'mail'
    },
    {
      title: 'exam',
      url: '/folder/Trash',
      icon: 'trash'
    }
  ];
  url:string='http://localhost:8080/api/mocktest-controller/';
  questions:any=this.mockTestSer.getDataFromServer('http://localhost:8080/api/questions/');
  // userRole=this.mockTestSer.getStringFromServer(this.url);

  public userInfo:object;
   userRole;
   data;
   registerId;
  constructor(private mockTestSer: MockTestService,private userServ:UsersService,private auth:AuthService,private router:Router) { }

  isAuthenticated(){
   if(this.auth.isLogin==true)
   {
    if(this.auth.data.role=='admin')
     this.userRole='admin';
     else
     this.userRole='user';
     console.log(this.userRole)
     return true;
   }
 }
 async logout() {
    
  if(this.auth.logout())
  {
    this.router.navigate(['login']);
  }

  }
  
  users()
  {
    this.userServ.getUserById(this.registerId).subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
  ngOnInit() {

    this.userRole='user'
    this.users();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.adminPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    // this.isAuthenticated();
    this.auth.getUserInfo().then(userData => {
      console.log(userData);
      this.userInfo=userData;
      this.registerId=userData.id;
      console.log(this.registerId);
    })
  }

}
