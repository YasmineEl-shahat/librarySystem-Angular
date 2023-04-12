import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import {Member } from 'src/app/models/member';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url = 'http://localhost:8080';
  token = new BehaviorSubject<any>(localStorage.getItem('Token')).value;
  headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _httpClient: HttpClient) {}

  get(url: string) {
    return this._httpClient.get(`${this.api_url}/${url}`, {
      headers: this.headers,
    });

  }

  getById(url: string , id:any) {
    // console.log(id);
    // console.log(`${this.api_url}/${url}${id}`);
    return this._httpClient.get(`${this.api_url}/${url}${id}`, {
      headers: this.headers,
    });
  }
  
  post(url: string, body: any) {
    return this._httpClient.post(`${this.api_url}/${url}`, body, {
      headers: this.headers,
    });
  }

  patch(url: string, body: any) {
    return this._httpClient.patch(`${this.api_url}/${url}`, body, {
      headers: this.headers,
    });
  }

  delete(url: string) {
    return this._httpClient.delete(`${this.api_url}/${url}`, {
      headers: this.headers,
    });
  }

  getBook(url: string, id: number) {
    return this._httpClient.get(`${this.api_url}/${url}${id}`, {
      headers: this.headers,
    });
  }
}
