import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsActiveGuard implements CanActivate {
  constructor(private _userService:UserService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve=>{
        this._userService.isActivated().subscribe(
          (response:any)=>{
            console.log(response.activate);
            if  (response.activate ==='false'){
              this._router.navigateByUrl('/activate');
              return resolve(false)
            }else{
              return resolve(true)
            }
          }
        )
      })
  }
  
}
