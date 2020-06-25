import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateExamPageRoutingModule } from './create-exam-routing.module';

import { CreateExamPage } from './create-exam.page';
// import { RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RxReactiveFormsModule,
    ReactiveFormsModule,
    CreateExamPageRoutingModule
  ],
  declarations: [CreateExamPage]
})
export class CreateExamPageModule {}
