import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTestService } from '../services/auth-test.service';
import {filter, map,take} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService:AuthTestService, private router:Router){}

  canLoad():Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter(v => v !== null),
      take(1),
      map(isAuthenticated =>{
        if(isAuthenticated){
          return true
        } else {
          this.router.navigateByUrl('/login')
          return false
        }
      })
    )
  }
}
