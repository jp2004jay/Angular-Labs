import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  loginForm = this._fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  onLoginTap(){
    const emailGet = localStorage.getItem('email')
    const passwordGet = localStorage.getItem('password')
    if(this.loginForm.get('email')?.value == emailGet && this.loginForm.get('password')?.value == passwordGet){
      this._router.navigate(['/'])
    }
    else{
      alert("Invalid Login, Please enter valid email and password")
    }
  }
}
