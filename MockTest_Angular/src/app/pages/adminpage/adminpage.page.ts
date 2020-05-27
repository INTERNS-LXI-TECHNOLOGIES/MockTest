import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(true);
  }

}
