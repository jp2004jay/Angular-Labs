import { Component, inject } from '@angular/core';
import { MokeApiService } from '../moke-api.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-crud',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './api-crud.component.html',
  styleUrl: './api-crud.component.css'
})
export class ApiCrudComponent {
  private _mokeApi = inject(MokeApiService)
  students:any = []

  ngOnInit(){
    this._mokeApi.getAllStudent().subscribe((res)=>{
      this.students = res
    })
  }
}
