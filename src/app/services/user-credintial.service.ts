import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserCredintialService {
  private encryptToken: any;
  constructor() { }
 getCredintial():object{
   this.encryptToken = localStorage.getItem("Token");
  return  jwt_decode(this.encryptToken);
 }
}
