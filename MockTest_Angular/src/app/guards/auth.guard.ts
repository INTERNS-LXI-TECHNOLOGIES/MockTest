import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  
  constructor(public authService:AuthService,private router:Router){}
  canActivate() : boolean{
    console.log(this.authService.isAuthenticated());
    if (!this.authService.isAuthenticated()) {

      this.router.navigate(['login']);
      return false;
      }
      return true
  }
  }
  

