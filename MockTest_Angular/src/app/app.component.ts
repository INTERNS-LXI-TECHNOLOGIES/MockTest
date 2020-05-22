import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  static getUser():string{
    return JSON.stringify(this.user);
  }
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
  
  questions:any;
  
  constructor(private http:HttpClient,
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
    AppComponent.user=this.http.get('http://localhost:8080/api/mocktest-controller/',{responseType: 'text'}).pipe(map(data => {
  console.log('raw ::'+data);
    return data;}));

    this.questions=this.http.get('http://localhost:8080/api/questions/').pipe(map(data => {
  console.log('raw ::'+data);
    return data;}));

    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
