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
      title: 'home',
      url: '/menu',
      icon: 'home'
    },
    {
     
      title: 'question',
      url: '/menu/question',
      icon: 'mail'
    },
    {
      title: 'exam',
      url: '/menu/exam',
      icon: 'paper-plane'
    },
    {
      title: 'exam-analysis',
      url: '/menu/exam-analysis',
      icon: 'pencil'
    }
  ];

  public userPages = [
    {
      title: 'home',
      url: '/menu',
      icon: 'home'
    },
 
    {
      title: 'Dashboard',
      url:  '/menu/user-dashboard',
      icon: 'mail'
    }
    // {
    //   title: 'ActiveExams',
    //   url: '/menu/exam',
    //   icon: 'heart'
    // }
  ];
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.role='admin'
    //  const path = window.location.pathname.split('/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.adminPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

}
