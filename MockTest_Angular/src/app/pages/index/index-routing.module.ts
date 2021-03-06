import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from '../../guards/login.guard';
import { IndexPage } from './index.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate:[AuthGuard],
    children: [
          {
            path: '',
            loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule)
          },
          {
            path: 'login',
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
          },
          {
            path: 'signup',
            loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
          }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
