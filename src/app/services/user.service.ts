import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  logged = new BehaviorSubject<boolean>(this.isLoggedIn());
  // user:object = {};

  constructor() {}

  // getUser(){
  //   return User;
  // }
  login(token: string, message: string) {
    localStorage.setItem('Token', token);
    // user = jwt_decode(token)
    // {
    //   "id": 2,
    //   "role": "badmin",
    //   "iat": 1681082089,
    //   "exp": 1681092889
    // }

    localStorage.setItem('message', message);
    this.logged.next(true);
  }
  isLoggedIn(): boolean {
    let token = localStorage.getItem('Token');
    let message = localStorage.getItem('message');
    return token != null;
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('message');
    this.logged.next(false);
  }
}
