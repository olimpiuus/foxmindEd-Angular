import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CheckoutModule } from './checkout.module';

@Injectable({
  providedIn: 'root',
})

export class PersonalDataService {
  items: any;

  constructor(private fb: FormBuilder) { 
  }


  profileForm = this.fb.group({ 
    items:[[{name:'name1', description:'asdfasdffasd'},{name:'name2', description:'asdfasdffasd'},{name:'name3', description:'asdfasdffasd'}],[Validators.required]],
    personalInfo:this.fb.group({
      name: new FormControl(['']),
      middleName:[''],
      lastName:[''],
      email:['',Validators.email],
      phone:['']
    }),
    address: this.fb.group({
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

  getForm(){
    return this.profileForm
  }
}
