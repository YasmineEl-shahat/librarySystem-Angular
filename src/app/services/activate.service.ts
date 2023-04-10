import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';
@Injectable({
  providedIn: 'root',
})
export class ActivateService {
  constructor(
    private _apiService: ApiService,
  
  ) {}
  activateAccount(id: number, role: string, body: any) {
    return this._apiService.patch(`${role}/activate/${id}`, body);
  }
}
