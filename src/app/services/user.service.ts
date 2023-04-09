import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  logged = new BehaviorSubject<boolean>(this.isLoggedIn());
  private user:object = {};

  constructor() {}

  getUser(){
    return this.user;
  }
  login(token: string, message: string) {
    localStorage.setItem('Token', token);
    this.user = jwt_decode(token)
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
