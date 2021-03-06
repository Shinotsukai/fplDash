import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenModule } from './screens/login-screen/login-screen.module';
import { MainContentModule } from './screens/main-content/main-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginScreenModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
