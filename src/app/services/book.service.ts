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

   getLatestBooks(){
    return this._apiService.get(`newBooks`)
   }
   getBook(id: string){
    return this._apiService.get(`books/${id}`);
  }
}
