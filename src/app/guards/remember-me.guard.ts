import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
import { AuthTestService } from '../services/auth-test.service';

@Injectable({
  providedIn: 'root',
})
export class RememberMeGuard implements CanLoad {
  constructor(private authService: AuthTestService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((v) => v !== null),
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/content', { replaceUrl: true });
        }
        return true;
      })
    );
  }
}
