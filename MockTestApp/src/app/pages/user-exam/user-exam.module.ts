import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserExamPageRoutingModule } from './user-exam-routing.module';

import { UserExamPage } from './user-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserExamPageRoutingModule
  ],
  declarations: [UserExamPage]
})
export class UserExamPageModule {}
