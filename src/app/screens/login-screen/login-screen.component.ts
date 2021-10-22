import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTestService } from 'src/app/services/auth-test.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  credentials!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService:AuthTestService,
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.credentials = this.fb.group({
      email:['eve.holt@reqres.in',[Validators.required,Validators.email]],
      password:['cityslicka',[Validators.required,Validators.minLength(6)]]
    }
      )
  }

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }


  async login(){
   

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {

        this.router.navigateByUrl('/content',{replaceUrl:true});
        
      },

      async (res) => {
        alert('whoops')
        
      }
    )
  }

}
