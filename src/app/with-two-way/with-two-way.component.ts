import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-two-way',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass],
  templateUrl: './with-two-way.component.html',
  styleUrl: './with-two-way.component.css'
})
export class WithTwoWayComponent {
  student: any = {
    name: '',
    contact: '',
    email: '',
    spi: '',
    password: '',
    dob: '',
    projects: [],
    gender: 'Male',
    hobbies: [false, false, false],
    address: ''
  }

  tempProject: any = {}

  saveProject() {
    if (this.tempProject.projname && this.tempProject.projdesc) {
      this.student.projects.push(this.tempProject);
      this.tempProject = {};
    }
  }

  passwordCriteria = {
    hasUpperLower: false,
    minLength: false,
    hasSpecialChar: false,
    hasNumber: false
  };

  validatePassword(): void {
    let password = this.student.password
    this.passwordCriteria.hasUpperLower = /[A-Z]/.test(password) && /[a-z]/.test(password);
    this.passwordCriteria.minLength = password.length >= 8;
    this.passwordCriteria.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.passwordCriteria.hasNumber = /\d/.test(password);
  }
}
