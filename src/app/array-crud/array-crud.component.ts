import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-crud',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './array-crud.component.html',
  styleUrl: './array-crud.component.css'
})
export class ArrayCrudComponent {
  tempText:string = ''
  
  names:string[] = ['Mehul', 'Sachin', 'Jay']
  copyOfNames:string[] = this.names

  editIndex:number = -1
  searchText:string = ''

  addName(){
    if(this.editIndex == -1){
      this.names.push(this.tempText)
    }
    else{
      this.names[this.editIndex] = this.tempText
    }
    this.editIndex = -1
    this.tempText = ''
  }

  editName(i:number){
    this.tempText = this.names[i]
    this.editIndex = i
  }

  deleteName(i:number){
    this.names.splice(i, 1)
  }

  searchName(){
    if(this.searchText == ''){
      this.names = this.copyOfNames
    }
    else{
      this.names = this.names.filter(temp => temp.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
