import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-without-two-way',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './without-two-way.component.html',
  styleUrl: './without-two-way.component.css'
})
export class WithoutTwoWayComponent {
  blank:any = { projects:[] }
  project:any = {projname:'', projdesc:''}

  dataFill(e:any){
    const {name, value} = e.target
    this.blank = {...this.blank, [name]:value}
  }

  projectFill(e:any){
    const {name, value} = e.target
    this.project = {...this.project, [name]:value}
  }

  onSubmit(e:any){
    e.preventDefault()
    if(this.project.projname == undefined || this.project.projname === ''){
      alert("Please enter project name")
    }
    else if(this.project.projdesc == undefined || this.project.projdesc === ''){
      alert("Please enter project discription")
    }
    else if(this.project.projduration == undefined || this.project.projduration === ''){
      alert("Please add project duration")
    }
    else{
      this.blank.projects.push(this.project)
      this.project = {projname:'', projdesc:''}
    }
  }
}
