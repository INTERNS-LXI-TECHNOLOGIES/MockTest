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
  }
 
];

//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'folder/:id',
//     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//   },
//   {
//     path: 'create-question',
//     loadChildren: () => import('./pages/create-question/create-question.module').then( m => m.CreateQuestionPageModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
//   }

// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
