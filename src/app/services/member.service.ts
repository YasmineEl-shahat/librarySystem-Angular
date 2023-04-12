import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
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
  // deleteMember(id: number) {
  //   return this._apiService.delete(`members/${id}`);
  // }


