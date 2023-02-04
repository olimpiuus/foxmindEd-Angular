import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent {
  onboardingForm = new FormGroup({
    account: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }),
    payment: new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      CVC: new FormControl('', Validators.required),
    })
  })
}
