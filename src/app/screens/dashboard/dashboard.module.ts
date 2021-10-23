import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { PitchPlayerModule } from 'src/app/components/pitch-player/pitch-player.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{ path: '', pathMatch: 'full', component: DashboardComponent }]
    ),
    PitchPlayerModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
