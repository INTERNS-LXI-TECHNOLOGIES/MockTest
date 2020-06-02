import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendedExamsPageRoutingModule } from './attended-exams-routing.module';

import { AttendedExamsPage } from './attended-exams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendedExamsPageRoutingModule
  ],
  declarations: [AttendedExamsPage]
})
export class AttendedExamsPageModule {}
