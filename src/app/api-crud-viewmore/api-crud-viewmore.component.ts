import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MokeApiService } from '../moke-api.service';

@Component({
  selector: 'app-api-crud-viewmore',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './api-crud-viewmore.component.html',
  styleUrl: './api-crud-viewmore.component.css'
})
export class ApiCrudViewmoreComponent {
  private _mokeApi = inject(MokeApiService)
  private _activatedRoute = inject(ActivatedRoute)
  private _router = inject(Router)

  tempStudent:any = {}
  id:any = null

  ngOnInit(){
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
    this._mokeApi.getStudentByID(this.id).subscribe((res:any) => {
      this.tempStudent = res
    })
  }

  deleteStudent(){
    this._mokeApi.deleteStudent(this.id).subscribe((res)=>{
      this._router.navigate(['/api-crud'])
    })
  }
}
