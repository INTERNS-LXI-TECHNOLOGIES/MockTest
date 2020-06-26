import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AccountResourceService } from 'src/app/services/services';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedIndex = 0;
  selectedPath='';
  loggedUser;
  userAuthorities;
  role;
  public adminPages = [
    {
      title: 'Home',
      url: '/menu',
      icon: 'home'
    },
    {
     
      title: 'Question',
      url: '/menu/question',
      icon: 'mail'
    },
    {
      title: 'Exam',
      url: '/menu/exam',
      icon: 'paper-plane'
    },
    {
      title: 'Exam Analysis',
      url: '/menu/exam-analysis',
      icon: 'pencil'
    }
  ];

  public userPages = [
    {
      title: 'Home',
      url: '/menu',
      icon: 'home'
    },
 
    {
      title: 'Dashboard',
      url:  '/menu/user-dashboard',
      icon: 'mail'
    },
    {
      title: 'Certificates',
      url: '/menu/certificates',
      icon: 'heart'
    }
  ];
  
  constructor(private router:Router,private accSer:AccountResourceService) {}

  ngOnInit() {
    this.accSer.getAccountUsingGET().subscribe(d=>{
      console.log('user logged=>');
      console.log(d);
      this.loggedUser=d;
      this.userAuthorities=d.authorities;
      this.userAuthorities.forEach(element => {
        if(element==="ROLE_ADMIN"){
          this.role='admin';
        }
        else{
          this.role='user';
        }
        console.log('user role-'+this.role);
      });
    });
  }

}
