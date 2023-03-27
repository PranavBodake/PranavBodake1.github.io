import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  divsize={
    'width.px':500,
    'height.px':'auto',
    'margin-top.px':100,
    'margin-left.px':500,
    'padding.px':20,
    'border-radius.px': 10,
    'margin-bottom.px':200
  }

  ngOnInit(): void {

  }

  signup = new FormGroup({
    name: new FormControl('',{
      validators: [Validators.required, Validators.maxLength(15)],
      nonNullable:true
    }),

    email: new FormControl('',{
      validators: [Validators.required, Validators.maxLength(30), Validators.email],
      nonNullable:true
    }),

    mobile: new FormControl('',{
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")],
      nonNullable:true
    }),

    address: new FormControl('',{
      validators: [Validators.required],
      nonNullable:true
    }),

    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(8), Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')],
      nonNullable:true
    })

  })

  submitForm():void{
    console.log(this.signup);

  }

  get namectr():FormControl{
    return this.signup.get('name') as FormControl;
  }

  get emailctr():FormControl{
    return this.signup.get('email') as FormControl;
  }

  get passwordctr():FormControl{
    return this.signup.get('password') as FormControl;
  }

  get mobilectr():FormControl{
    return this.signup.get('mobile') as FormControl;
  }

  get addressctr():FormControl{
    return this.signup.get('address') as FormControl;
  }

  register():any{
    Swal.fire('Registered Succeessfully')
  }
}


