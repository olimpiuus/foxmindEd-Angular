import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProduct } from '../main/data-fetch.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent {
  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({ 
    items: [<IProduct[]>[]],
    personalInfo:this.fb.group({
      name:[''],
      middleName:[''],
      lastName:[''],
      email:['',Validators.email],
      phone:['']
    }),
    adress: this.fb.group({
      address1:['',Validators.required],
      address2:[''],
      city:['',Validators.required],
      country:['',Validators.required],
      postalCode:['',Validators.required]
    }),
    payment: this.fb.group({
      type:''
    }),
    dateOfDelivery: [''],
    
  })
  onboardingForm = new FormGroup({
    account: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }),
    payment: new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      CVC: new FormControl('', Validators.required)
    })
  });
}
