import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private router:Router){}

  userList = [
    { id: 1, name: 'John china',email:'john@gmail.com',mobile:'01836363737',address:'5/5 Gaznabi Road,Dhaka-1216' },
    { id: 2, name: 'Thirple H',email:'th@gmail.com',mobile:'01976360739',address:'5/5 Gaznabi Road,Dhaka-1216' },
    { id: 3, name: 'Ayon Bro' ,email:'ayon@gmail.com',mobile:'01776003798',address:'5/5 Gaznabi Road,London'},
   
  ];

  viewDetails(user: { id: number, name: string, email: string, mobile: string, address: string }) {
    this.router.navigate(['/details'], 
    { queryParams: { id: user.id, name: user.name, email: user.email, mobile: user.mobile, address: user.address } });
  }

}
