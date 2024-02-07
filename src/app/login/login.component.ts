import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


    loginForm!: FormGroup;
 
  
    constructor(private formbuilder: FormBuilder, private router: Router,private authService:AuthService) { }
  
    ngOnInit() {
      this.loginForm = this.formbuilder.group({

        userId: ['', [Validators.required,Validators.minLength(4),
                      Validators.pattern(/^[a-z]+$/i)]],
        password: ['', [Validators.required,Validators.pattern(/^[a-z]+$/i),
                      Validators.minLength(4)]]
      });
    }
  
    login() {
      const { userId, password } = this.loginForm.value;
  
      if (this.authService.login(userId, password)) {
        this.router.navigate(['/dashboard']);
        console.log(this.loginForm.value)
      } else {
        alert('Invalid user id or password');
      }
    }
  }
