import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamStartPageRoutingModule } from './exam-start-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExamStartPage } from './exam-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamStartPageRoutingModule, 
    TranslateModule,
  ],
  declarations: [ExamStartPage]
})
export class ExamStartPageModule {}
