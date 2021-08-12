import { AuthService } from './../../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  loginForm: FormGroup = this.formBuild.group({
    email : ['usuarioan@gmail.com'],
    password : ['Usuarioan@12']
  })

  constructor(
    private formBuild: FormBuilder,
    private authService : AuthService) { }



  ngOnInit(): void {
  }


  login(){
   let email =  this.loginForm.get('email')?.value
   let senha =  this.loginForm.get('password')?.value
   this.authService.authenticate(email,senha).subscribe(e=>console.log(e))
  }

}
