import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Member } from 'src/app/models/member';

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Member } from '../models/member';
@Injectable({
  providedIn: 'root',
})
export class MemberService {


  constructor(private _apiService: ApiService) {}

  getAll() {
    return this._apiService.get(`members`);
  }
  deleteMember(id: number): Observable<any> {
    return this._apiService.delete(`members/${id}`);
  }

  // memberSearch(searchTerm: string): Observable<any> {
  //   return this._apiService.get(`members/search?searchTerm=${searchTerm}`);
  // }

  get(id: number) {
    return this._apiService.get(`members/${id}`);
  }
  getById(id: any) {
    console.log(this._apiService.getById(`members/`, id));

    return this._apiService.getById(`members/`, id);
  }

  post(member: any) {
    return this._apiService.post(`members`, member);
  }
  patch(id: any, member: any): Observable<any> {
    return this._apiService.patch(`members/${id}`, member);
  }

  getBorrowedBooks(id: number): Observable<any> {
    return this._apiService.getBook(`borrowedBooks/list?id=`, id);
  }

  getreadingBooks(id: number): Observable<any> {
    return this._apiService.getBook(`readingBooks/list?id=`, id);
  }

  updateProfile(id: number, body: any) {
    return this._apiService.patch(`members/${id}`, body);
  }
}







