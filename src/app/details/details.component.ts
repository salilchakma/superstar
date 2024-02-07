

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  userId!: number;
  userName!: string;
  mobile!:number;
  email!:string;
  address!:string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.userName = params['name'];
      this.email =params['email'];
      this.mobile =params['mobile'];
      this.address =params['address'];
    });
  }
}
