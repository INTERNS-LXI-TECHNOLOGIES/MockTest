import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamPagePageRoutingModule } from './exam-page-routing.module';

import { ExamPagePage } from './exam-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPagePageRoutingModule
  ],
  declarations: [ExamPagePage]
})
export class ExamPagePageModule {}
