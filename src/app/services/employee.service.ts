import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private apiService: ApiService) {}

  getAll() {
    return this.apiService.get(`employees`);
  }
  get(id: number) {
    return this.apiService.get(`employees/${id}`);
  }
  post(body: any) {
    return this.apiService.post(`employees`, body);
  }
  patch(id: number, body: any) {
    return this.apiService.patch(`employees/${id}`, body);
  }
}
