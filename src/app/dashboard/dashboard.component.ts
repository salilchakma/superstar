import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userStats = [
    { label: 'Active Users', value: 100 },
    { label: 'Online Users', value: 50 },
    { label: 'Inactive Users', value: 1000 }
    
  ];

  constructor(private router: Router) {}

  getBackgroundColor(label: string){
    switch (label) {
      case 'Active Users':
        return '#74E291'; 
      case 'Online Users':
        return '#9EDDFF'; 
      case 'Inactive Users':
        return '#FF8F8F'; 
      default:
        return '#FFFFFF'; 
    }
}  
   navigateWithQueryParam(label: string) {
       this.router.navigate(['/dashboard'],
   { queryParams: { status: label.toLowerCase() } });
}
}


