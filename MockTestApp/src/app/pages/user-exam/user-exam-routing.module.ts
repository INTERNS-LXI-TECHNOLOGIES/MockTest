import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserExamPage } from './user-exam.page';

const routes: Routes = [
  {
    path: ':id',
    component: UserExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserExamPageRoutingModule {}
