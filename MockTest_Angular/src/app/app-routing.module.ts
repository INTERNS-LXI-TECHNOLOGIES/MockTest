import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

 
  {
    path: 'adminpage',
    loadChildren: () => import('./pages/adminpage/adminpage.module').then( m => m.AdminpagePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
 

 

 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule {}
