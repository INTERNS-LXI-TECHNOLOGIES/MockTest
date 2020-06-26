import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageSetttingsPage } from './language-setttings.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageSetttingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageSetttingsPageRoutingModule {}
