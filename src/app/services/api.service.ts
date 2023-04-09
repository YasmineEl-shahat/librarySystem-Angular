import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url = 'http://localhost:8080';
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _httpClient: HttpClient) {}

  get(url: string) {
    return this._httpClient.get(`${this.api_url}/${url}`, {
      headers: this.headers,
    });
  }

  post(url: string, body: any) {
    return this._httpClient.post(`${this.api_url}/${url}`, body, {
      headers: this.headers,
    });
  }

  put(url: string, body: any) {
    return this._httpClient.put(`${this.api_url}/${url}`, body, {
      headers: this.headers,
    });
  }

  delete(url: string) {
    return this._httpClient.delete(`${this.api_url}/${url}`, {
      headers: this.headers,
    });
  }
}
