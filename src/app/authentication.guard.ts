import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from './authguardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardserviceService, private router: Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     console.log(localStorage.getItem('username'));
      if(localStorage.getItem('username')=="admin"){
        console.log("hi ezhil");
        return true;
      }
      else{
        this.router.navigate(['/login']);
    return false;  }
  }
  
}
