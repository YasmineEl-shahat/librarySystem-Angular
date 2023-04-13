import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookOperationService {

  constructor(private apiService: ApiService) { }
  allBorrowedBook() {
    return this.apiService.get(`book/borrowed`);
  }
  addBorrowOperation(operation: any ) {
    return this.apiService.post(`book/borrow`,operation );
  }
  // post(body: any) {
  //   return this.apiService.post(`admins`, body);
  // }
  // patch(id: number, body: any) {
  //   return this.apiService.patch(`admins/${id}`, body);
  // }
}
