import { Component } from '@angular/core';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrl: './menucard.component.css'
})
export class MenucardComponent {
  menuItems = [
    { name: 'Item 1', image: 'assets/donate.jpg', details: 'lorem ipsunm' },
    { name: 'Item 2', image: 'assets/snow2.jpg', details: 'lorem 2' },
    
  ]

}
