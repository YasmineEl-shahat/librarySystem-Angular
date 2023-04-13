import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { UserCredintialService } from './user-credintial.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any = localStorage.getItem('Token');
  logged = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private _apiService: ApiService,private userCredintialService:UserCredintialService) {}

  login(token: string, message: string) {
    const expirationTime = new Date().getTime() +1 * 1000;
    localStorage.setItem('Token', token);

    this.logged.next(true);
  }
  isLoggedIn(): boolean {
    let token = localStorage.getItem('Token');
    // let message = localStorage.getItem('message');
    console.log(token);
    return token != null;
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('message');
    this.logged.next(false);
  }

    // const expirationTime = new Date().getTime() + 3600 * 1000;
    // setTimeout(() => {
    //   const currentTime = new Date().getTime();
    //   const expirationTime = parseInt(localStorage.getItem('expirationTime'), 10);
    //   if (currentTime > expirationTime) {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('expirationTime');
    //   }
    // }, 3600 * 1000); // 1 hour in milliseconds
  isActivated(){
    let token:any = localStorage.getItem('Token');
    let user:any=jwt_decode(token);
   let role=user.role;
   if (role == "badmin") role = "admin";
  
   let id=user.id;

  return this._apiService.get(`${role}/isActivate/${id}`)
  }

}
