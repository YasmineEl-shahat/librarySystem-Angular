import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {


  // private baseUrl = 'http://localhost:8080';

  // constructor(public http: HttpClient) { }

  // getAll(): Observable<Member[]> {
  //   const url = `${this.baseUrl}/members`;
  //   return this.http.get<Member[]>(url);
  // }







  constructor(private _apiService: ApiService) { }

  getAll() {
    return this._apiService.get(`members`);
  }

  // getById(id) {
  //   return this._apiService.get(`members/${id}`);
  // }
  // add(member) {
  //   return this._apiService.post(`members`, member);
  // }
  // update(id, member) {
  //   return this._apiService.put(`members/${id}`, member);
  // }
  // delete(id) {
  //   return this._apiService.delete(`members/${id}`);
  // }
}
