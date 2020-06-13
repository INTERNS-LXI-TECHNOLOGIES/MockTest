import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPagePage } from './exam-page.page';

const routes: Routes = [
  {
    path: ':id',
    component: ExamPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPagePageRoutingModule {}
