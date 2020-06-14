import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamStartPage } from './exam-start.page';

const routes: Routes = [
  {
    path: ':id',
    component: ExamStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamStartPageRoutingModule {}
