import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard{
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {

    // console.log('console from authgaurd')
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/side']);
      return false;
    }
  }
}
