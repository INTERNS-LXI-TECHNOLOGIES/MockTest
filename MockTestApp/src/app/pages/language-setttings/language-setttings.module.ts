import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageSetttingsPageRoutingModule } from './language-setttings-routing.module';

import { LanguageSetttingsPage } from './language-setttings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageSetttingsPageRoutingModule
  ],
  declarations: [LanguageSetttingsPage]
})
export class LanguageSetttingsPageModule {}
