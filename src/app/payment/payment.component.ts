import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment = new FormGroup({
    cardnumber : new FormControl('',{
      validators :[Validators.required, Validators.maxLength(12)], nonNullable:true
    }),
    name: new FormControl('',{
      validators:[Validators.required], nonNullable:true
    }),
    month: new FormControl('',{
      validators:[Validators.required], nonNullable:true
    }),
    year: new FormControl('',{
      validators:[Validators.required], nonNullable:true
    }),
    cvv: new FormControl('',{
      validators:[Validators.required], nonNullable:true
    }),
  })

  ngOnInit(): void {

  }
  constructor( private router :Router){}



  paid():void{
    this.router.navigateByUrl('redirect')
  }
}
