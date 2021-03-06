import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public authService:AuthService,private router:Router){}
  
  canActivate() : boolean{
    console.log('login gaurd -'+this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {

      this.router.navigate(['menu']);
      return false;
      }
      return true
  }
  
}
