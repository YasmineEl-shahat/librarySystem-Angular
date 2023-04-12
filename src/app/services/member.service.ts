import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Member } from 'src/app/models/member';

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {



  constructor(private _apiService: ApiService) { }

  getAll() {
    return this._apiService.get(`members`);
  }
  deleteMember(id: number): Observable<any> {
    return this._apiService.delete(`members/${id}`);
  }

  memberSearch(searchTerm: string): Observable<any> {
    return this._apiService.get(`members/search?searchTerm=${searchTerm}`);
  }

  getById(id:any) {
    console.log(id);
    return this._apiService.getById(`members/`, id);
  }
  getBorrowedBooks(id: number): Observable<any> {
    return this._apiService.getBook(`borrowedBooks/list?id=`, id);
  }
  getreadingBooks(id: number): Observable<any> {
    return this._apiService.getBook(`readingBooks/list?id=`,id);
  }


  updateProfile(id: number, body: any) {
    return this._apiService.patch(`members/${id}`, body);
  }
}

  // add(member) {
  //   return this._apiService.post(`members`, member);
  // }
  // update(id:any, member:any): Observable<any> {
  //   return this._apiService.patch(`members/${id}`, member);
  // }
  // delete(id) {
  //   return this._apiService.delete(`members/${id}`);
  // }
  // deleteMember(id: number) {
  //   return this._apiService.delete(`members/${id}`);
  // }





