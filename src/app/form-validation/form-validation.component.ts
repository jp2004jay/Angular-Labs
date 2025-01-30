import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  user:any = 
  {
    username: '',
    contact: ''
  }
}
