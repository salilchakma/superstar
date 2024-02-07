import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  login(userId: string, password: string): boolean {
    if (userId === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(){
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
