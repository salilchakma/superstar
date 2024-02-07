import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}

  logout(){

    this.router.navigate(['/login']);
  }
  logoTouch(){
    this.router.navigate(['/dashboard'])
  }

}
