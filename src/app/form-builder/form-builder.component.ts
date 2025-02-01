import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [NgIf, JsonPipe, ReactiveFormsModule, NgFor],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

  fb = inject(FormBuilder)

  createAddress(): FormGroup {
    return this.fb.group({
      line1: ['', Validators.required],
      line2: [''],
      city: ['', Validators.required]
    })
  }

  userForm:FormGroup = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    addresses: this.fb.array([this.createAddress()])
  })

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  addAddress(){
    this.addresses.push(this.createAddress())
  }

  removeAddress(id:number){
    this.addresses.removeAt(id)
  }

  addAdminIdControl(){
    this.userForm.addControl('adminId', this.fb.control('', [Validators.required]));
  }

  removeAdminIdControl(){
    this.userForm.removeControl('adminId')
  }

  submitData(){
    alert("Data Submitting...")
    this.userForm.reset()
  }
}
