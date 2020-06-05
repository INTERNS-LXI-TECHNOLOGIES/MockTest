import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendedExamDetailsPageRoutingModule } from './attended-exam-details-routing.module';

import { AttendedExamDetailsPage } from './attended-exam-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendedExamDetailsPageRoutingModule
  ],
  declarations: [AttendedExamDetailsPage]
})
export class AttendedExamDetailsPageModule {}
