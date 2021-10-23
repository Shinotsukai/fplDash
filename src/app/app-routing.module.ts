import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RememberMeGuard } from './guards/remember-me.guard';
import { MainContentComponent } from './screens/main-content/main-content.component';

const routes: Routes = [

  {
    path:'login',
    loadChildren:()=> import('./screens/login-screen/login-screen.module').then(m=> m.LoginScreenModule),
    canLoad:[RememberMeGuard]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },

  {path:'content',
component:MainContentComponent,
children:[
  {path:"",
  redirectTo:"dashboard",
  pathMatch:"full"},
  {
    path:'dashboard',
    loadChildren:()=> import('./screens/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canLoad:[AuthGuard]
  }
]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
