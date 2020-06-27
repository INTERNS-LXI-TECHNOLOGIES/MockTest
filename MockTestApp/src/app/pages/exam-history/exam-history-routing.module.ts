import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

import { ExamHistoryPage } from './exam-history.page';

const routes: Routes = [
  {
    path: ':id',
    component: ExamHistoryPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamHistoryPageRoutingModule {}
