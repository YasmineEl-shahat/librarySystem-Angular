import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup  ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

  loginForm : FormGroup=new FormGroup({});

  

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$")]]

  
      });
    }

  // isValidControl(name:string):boolean
  // {
  //   // return this.loginForm.controls[name].valid;
  // }

  // isInValidAndTouched(name:string):boolean
  // {
  //   // return  this.loginForm.controls[name].invalid && (this.loginForm.controls[name].dirty || this.loginForm.controls[name].touched);
  // }

  // isControlHasError(name:string,error:string):boolean
  // {
  //   // return  this.loginForm.controls[name].invalid && this.loginForm.controls[name].errors?.[error];
  // }
}
