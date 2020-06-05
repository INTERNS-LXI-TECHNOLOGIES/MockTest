import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardPage } from './user-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPage,
    children: [

          {
            path: 'user-profile',
            loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
          },
          {
            path: 'attended-exams',
            loadChildren: () => import('./attended-exams/attended-exams.module').then( m => m.AttendedExamsPageModule)
          },
          {
            path: '',
            redirectTo: 'user-profile',
            pathMatch: 'full'
          }
     ]
    }
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardPageRoutingModule {}
