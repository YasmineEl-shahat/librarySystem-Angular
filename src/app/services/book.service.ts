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
   getBook(id: any){
    return this._apiService.get(`books/${id}`);
  }
  updateBook(id: any, book: any){
    return this._apiService.patch(`books/${id}`, book);
  }
}
