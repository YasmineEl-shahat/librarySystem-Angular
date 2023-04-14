import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCredintialService } from '../services/user-credintial.service';

@Injectable({
  providedIn: 'root'
})
export class IsBaseAdminGuard implements CanActivate {
  constructor(private _userCredintialService:UserCredintialService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve=>{
        let admin:any=this._userCredintialService.getCredintial();
        let role=admin.role;
        if(role != "badmin"){
          this._router.navigateByUrl('/notFound');
        return resolve(false)
        }
        else
        return resolve(true)
    })
  }
  
}
