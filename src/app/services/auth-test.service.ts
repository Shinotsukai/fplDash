import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token = '';

  constructor(private http: HttpClient) {
    this.getToken();
  }

  async getToken() {
    const token = await localStorage.getItem(TOKEN_KEY);
    if (token) {
      this.token = token;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { email:any; password:any }): Observable<any> {
    return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
    map((data:any)=>{
      return localStorage.setItem(TOKEN_KEY,data.token);
    }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }

  logout():Promise<void> {
    this.isAuthenticated.next(false);
    return localStorage.remove({ key: TOKEN_KEY });
  }
}
