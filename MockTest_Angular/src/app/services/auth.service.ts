import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminpagePage } from '../pages/adminpage/adminpage.page';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  imports:[HttpClient]

  public isLogin=false;
  private loginurl=""
  constructor(private http: HttpClient) { }

  public loginUser(user){
    //  return this.http.post<any>(this.loginurl,user)
    this.isLogin=true;
   return 'admin';
  
  }
  // public isAuthenticated(): boolean {
    
  //   return true;
  //   }
    
    

    // login() : void {
    //   this.isLogin = true;
    // }

    // logout():void{
    //   this.isLogin=false;
    // }
    
    authenticated() : boolean {
      return this.isLogin;
    }
    
    // public signup(postData) {
    // }
    
    // public logout() {
   
    // }
    
}
