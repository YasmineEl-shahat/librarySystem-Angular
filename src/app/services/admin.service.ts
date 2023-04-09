import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private apiService: ApiService) {}

  get() {
    return this.apiService.get(`admins`);
  }
  post(body: any) {
    return this.apiService.post(`admins`, body);
  }
}
