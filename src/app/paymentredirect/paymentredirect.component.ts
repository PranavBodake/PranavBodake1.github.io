import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paymentredirect',
  templateUrl: './paymentredirect.component.html',
  styleUrls: ['./paymentredirect.component.scss']
})
export class PaymentredirectComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      Swal.fire('OTP send on your Registered Mobile...');
    }, 5000);


  }



}
