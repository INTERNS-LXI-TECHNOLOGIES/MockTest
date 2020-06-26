import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import{LanguageSetttingsPage} from  '../language-setttings/language-setttings.page';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor( private translate: TranslateService, public popoverController: PopoverController) {}

  ngOnInit() {
 // this.translate.use('en');
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:LanguageSetttingsPage,
      event: ev,
      translucent: false
    });
 
    await popover.present();
  }
}
