import { NgModule, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MockTestService } from './mock-test.service';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'ashiq',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '', component: AppComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
