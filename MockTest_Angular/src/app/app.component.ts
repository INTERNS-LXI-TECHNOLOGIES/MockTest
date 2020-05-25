import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MockTestService } from './mock-test.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
 
  static user:any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Favorites',
      url: '/Favorites',
      icon: 'heart'
    }
  ];
  
  url:string='http://localhost:8080/api/mocktest-controller/';
  questions:any=this.mockTestSer.getDataFromServer('http://localhost:8080/api/questions/');
  user=this.mockTestSer.getStringFromServer(this.url);

  constructor(private mockTestSer: MockTestService,
     private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
