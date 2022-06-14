import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //1. lấy ra thông tin dăng nhập
      const loggedInUser = localStorage.getItem('loggedInUser');
      //2.kiểm tra nếu có thì cho vào admin
      if(loggedInUser){
        return true;
      }
      //3.nếu không thì quay về màn hình login
      this.router.navigateByUrl('/auth/login');
      return false;
    }

}
