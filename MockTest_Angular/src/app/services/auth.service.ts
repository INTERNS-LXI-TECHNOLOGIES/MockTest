import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    // Return true or false
    return true;
    }
    
    public login(postData) {
    // login actions
    }
    
    
    public signup(postData) {
    // login actions
    
    }
    
    public logout() {
    // logout actions
    }
    }
}
