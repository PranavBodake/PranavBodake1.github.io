import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit{



  ngOnInit(): void {

  }

  sendotp():void{
    alert('Activation link send to your registered Email..')
  }
}
