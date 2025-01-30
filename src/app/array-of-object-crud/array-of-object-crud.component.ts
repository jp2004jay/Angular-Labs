import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-of-object-crud',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './array-of-object-crud.component.html',
  styleUrl: './array-of-object-crud.component.css'
})
export class ArrayOfObjectCrudComponent {
  tempName: any = { firstName: '', lastName: '' }

  names: any[] = [
    { firstName: 'Mehul', lastName: 'Parmar' },
    { firstName: 'Sachin', lastName: 'Padaliya' },
    { firstName: 'Jay', lastName: 'Ramani' },
  ]
  copyOfNames: any[] = this.names

  editIndex: number = -1
  searchText: string = ''

  addName() {
    if (this.editIndex == -1) {
      this.names.push({ ...this.tempName })
    }
    else {
      this.names[this.editIndex].firstName = this.tempName.firstName
      this.names[this.editIndex].lastName = this.tempName.lastName
    }
    this.editIndex = -1
    this.tempName.firstName = ''
    this.tempName.lastName = ''
  }

  editName(i: number) {
    this.editIndex = i
    this.tempName.firstName = this.names[this.editIndex].firstName
    this.tempName.lastName = this.names[this.editIndex].lastName
  }

  deleteName(i: number) {
    this.names.splice(i, 1)
  }

  searchName() {
    if (this.searchText == '') {
      this.names = this.copyOfNames
    }
    else {
      this.names = this.names.filter(temp => {
          if(temp.firstName.toLowerCase().includes(this.searchText.toLocaleLowerCase()) || 
            temp.lastName.toLowerCase().includes(this.searchText.toLocaleLowerCase())
          ){
            return temp
          }
        }
      )
    }
  }
}
