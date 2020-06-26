import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedIndex = 0;
  selectedPath='';
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
  
  constructor(private router:Router) { 
    
  }

  ngOnInit() {

    // this.role=this.auth.getRole();
    // console.log(this.role);
     this.role='admin'
     console.log(this.role);
  
  }

}
