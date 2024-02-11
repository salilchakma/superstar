
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    
    this.router.navigate(['/contact'], {
      queryParams: this.formData 
    }); 

    console.log(this.formData)
    
    this.formData = {
         name: '',
         email: '',
         message: ''
    }; 

       alert('Form Submited Successfully')
  }

  cancelForm() {
    this.router.navigate(['/dashboard']);
  }
}
