import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public apiResponse: BehaviorSubject<any> = new BehaviorSubject({})
  constructor(private apiService: ApiService) { }
  async ngOnInit(): Promise<void> {
    this.apiResponse.next(await this.apiService.getTeamById(166603).toPromise()); // TODO: Move Id to somewhere much better
    console.log(this.apiResponse.getValue())
  }
}
