import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminpagePage } from '../pages/adminpage/adminpage.page';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  imports:[HttpClient]
  public data;
  public isLogin=false;
  private loginurl=""
  constructor(private http: HttpClient) { }

  public loginUser(user){
    //  return this.http.post<any>(this.loginurl,user)
    this.isLogin=true;
    this. data =sessionStorage.getItem('userData');
   return this.data;
  
  }

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    console.log(userData);
    if (userData && userData.length > 0) {
    return true;
    } else {
    return false;
    }
    }
    
    public async getUserInfo()
    {
      const userInfo=await sessionStorage.getItem('userData');
      return JSON.parse(userInfo);
    }
    public async login(postData) {
      console.log(postData.username);
      const loginApiResponce = {
        name: 'pushkala',
        role:'user'
        // id: 4,
        // token: '2323523523DFSWERWERWER'
      };
      await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
      return true;
    }
    
    public async logout() {
      await sessionStorage.removeItem('userData');
      await sessionStorage.clear();
      return true;
    }
    
}
