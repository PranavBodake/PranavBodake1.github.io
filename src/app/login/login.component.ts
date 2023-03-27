import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  divsize={
    'width.px':500,
    'height.px':'auto',
    'margin-top.px':150,
    'margin-left.px':500,
    'padding.px':20,
    'border-radius.px': 10
  }

  login = new FormGroup({
    email : new FormControl('',{
      validators:[Validators.required],
      nonNullable:true}),
    password : new FormControl('',{
      validators: [Validators.required],
      nonNullable:true})
  })

  submitForm():void{
    console.log(this.login);

  }

  // updateForm():void{
  //   this.login.setValue({
  //     email: '',
  //     password: ''
  //   })
  // }

  constructor(){}
  ngOnInit(): void {
  }

  get emailctr():FormControl{
    return this.login.get('email') as FormControl;
  }



}
