import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MokeApiService } from '../moke-api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-crud-add-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './api-crud-add-edit-form.component.html',
  styleUrl: './api-crud-add-edit-form.component.css'
})
export class ApiCrudAddEditFormComponent {
  private _router = inject(Router)
  private _activeRoute = inject(ActivatedRoute)
  private _mokeApi = inject(MokeApiService)

  studentForm = new FormGroup({
    createdAt: new FormControl(''),
    name: new FormControl(''),
    avatar: new FormControl(''),
    description: new FormControl(''),
    address: new FormControl(''),
    id: new FormControl('')
  })

  id: any = null

  ngOnInit() {
    this.id = this._activeRoute.snapshot.paramMap.get('id')
    this._mokeApi.getStudentByID(this.id).subscribe((res: any) => {
      this.studentForm.patchValue(res)
    })
  }

  submitForm(){
    if(this.id){
      this._mokeApi.updateStudent(this.id, this.studentForm.value).subscribe((res)=>{
        this._router.navigate(['/api-crud'])
      })
    }
    else{
      this._mokeApi.addStudent(this.studentForm.value).subscribe((res)=>{
        this._router.navigate(['/api-crud'])
      })
    }
  }
}
