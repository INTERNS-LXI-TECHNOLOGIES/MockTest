import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from '../../services/language/language.service';
@Component({
  selector: 'app-language-setttings',
  templateUrl: './language-setttings.page.html',
  styleUrls: ['./language-setttings.page.scss'],
})
export class LanguageSetttingsPage implements OnInit {
  languages=[];
  selected='';
  constructor(private popoverController: PopoverController,private langServ:LanguageService) { }

  ngOnInit() {
    this.languages=this.langServ.getLanguages();
    this.selected=this.langServ.selected;
  }

  selectLanguage(lng)
  {
    this.langServ.setLanguage(lng);
    this.popoverController.dismiss();
  }

}
