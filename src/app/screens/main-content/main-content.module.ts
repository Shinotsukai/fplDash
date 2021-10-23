import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { HeaderModule } from 'src/app/components/header/header.module';



@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full',component:MainContentComponent}
    ]),
    SidebarModule,
    HeaderModule
  ],
  exports:[MainContentComponent]
})
export class MainContentModule { }
