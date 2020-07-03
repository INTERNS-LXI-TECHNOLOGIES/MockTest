import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
  {path: 'menu',loadChildren: './pages/menu/menu.module#MenuPageModule'},
  {path: 'welcome',loadChildren: './pages/welcome/welcome.module#WelcomePageModule'},
  
  {
    path: 'language-setttings',
    loadChildren: () => import('./pages/language-setttings/language-setttings.module').then( m => m.LanguageSetttingsPageModule)
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
