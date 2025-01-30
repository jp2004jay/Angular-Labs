import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgSwitch, FormsModule, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // 1 st program
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  // 2 nd program
  day: string = 'Monday';

  //3 th program
  isHighlighted: boolean = true;
  bgColor:any = {}
  interval:any = null

  toggleStyle() {
    this.isHighlighted = !this.isHighlighted;
  }
  
  start(){
    this.stop()
    this.interval = setInterval(() => {
      let r = Math.ceil(Math.random()*255)
      let g = Math.ceil(Math.random()*255)
      let b = Math.ceil(Math.random()*255)
      this.bgColor = {
        "background-color": `rgb(${r}, ${g}, ${b}, 0.2)`
      }
    }, 100);
  }

  stop(){
    clearInterval(this.interval)
  }
  // 4 rd program
  isActive: boolean = true;

  toggleClass() {
    this.isActive = !this.isActive;
  }
  
  //5 th program
  billAmount: number = 0;
  perUnitPrice: number = 15
  unitOfBill = ''

  calculateBill() {
    this.billAmount = parseInt(this.unitOfBill) * this.perUnitPrice
  }

  //6 th program
  marks: number = 0;
  english = 0;
  maths = 0;
  science = 0

  getTotal(): void {
    this.marks = (this.english + this.maths + this.science) / 3
  }

  getGrade(): string {
    if (this.marks < 60) return 'Pass Class';
    if (this.marks >= 60 && this.marks < 80) return 'First Class';
    return 'Topper Class';
  }

  getGradeClass(): string {
    if (this.marks < 60) return 'pass-class';
    if (this.marks >= 60 && this.marks < 80) return 'first-class';
    return 'topper-class';
  }

  // 7 th program
  progress: number = 0;
  isUploading: boolean = false;

  chaluKaro() {
    if (this.isUploading) return;

    this.isUploading = true;
    this.progress = 0;

    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);
        this.isUploading = false;
      } else {
        this.progress += 10;
      }
    }, 300);
  }
}
