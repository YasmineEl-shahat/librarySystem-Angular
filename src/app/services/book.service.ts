import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _apiService:ApiService) { }

  get() {
    return this._apiService.get(`books`)

   }
  getLimit() {
    return this._apiService.get(`getCountBook`)

   }

  getLatestBooks(){
    return this._apiService.get(`newBooks`)
  }
  getBook(id: string){
    return this._apiService.get(`books/${id}`);
  }

  searchBook(formData: any){
    return this._apiService.post(`bookSearchFilter`,formData);
  }
 
  delete(id:number){
    return this._apiService.delete(`books/${id}`);
  }

}
