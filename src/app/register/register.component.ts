import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  register:FormGroup = this._fb.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  registerUser(){
    localStorage.setItem('email', this.register.get('email')?.value)
    localStorage.setItem('password', this.register.get('password')?.value)
    this.register.reset()
    this._router.navigate(['/auth/login'])
  }
}
