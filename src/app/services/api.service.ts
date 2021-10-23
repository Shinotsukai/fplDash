import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getTeamById(id: number) {
    return this.http.get(`https://js-fpl-api.herokuapp.com/getTeamById?id=${id}`);
  }
}
