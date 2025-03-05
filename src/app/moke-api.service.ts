import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MokeApiService {
  api_url = 'https://649fccdced3c41bdd7a6b3ac.mockapi.io/Students'
  private _http = inject(HttpClient)

  getAllStudent(){
    return this._http.get(this.api_url)
  }

  getStudentByID(id:any){
    return this._http.get(this.api_url + '/' + id)
  }

  deleteStudent(id:any){
    return this._http.delete(this.api_url + '/' + id)
  }

  addStudent(data:any){
    return this._http.post(this.api_url, data)
  }

  updateStudent(id:any, data:any){
    return this._http.put(this.api_url + '/' + id, data)
  }
}
