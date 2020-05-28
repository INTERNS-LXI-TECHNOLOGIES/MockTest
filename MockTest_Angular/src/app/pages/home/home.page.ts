import { Component, OnInit } from '@angular/core';
import { MockTestService } from '../../mock-test.service';
import{AuthService} from '../../services/auth.service';
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
   userRole;
  constructor(private mockTestSer: MockTestService,private auth:AuthService) { }

  isAuthenticated(){
   if(this.auth.isLogin==true)
   {
     this.userRole='admin';
     console.log(this.userRole)
     return true;
   }
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.adminPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
