import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  private user : any = {};
  private role: string = "";
  constructor(private _apiService:ApiService, private userCredintialService:UserCredintialService ) { }
  admin() {
    this.user=this.userCredintialService.getCredintial();
    this.user =JSON.stringify(this.user)
    return this._apiService.get(`${this.user.role}/activate/${this.user.id}`)

   }
   employee() {
    this.user=this.userCredintialService.getCredintial();
    this.user =JSON.stringify(this.user)
    return this._apiService.get(`${this.user.role}/activate/${this.user.id}`)

   }
   member() {
    this.user=this.userCredintialService.getCredintial();
    this.user =JSON.stringify(this.user)
    return this._apiService.get(`${this.user.role}/activate/${this.user.id}`)

   }
}
