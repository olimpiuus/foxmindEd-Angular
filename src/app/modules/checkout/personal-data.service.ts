import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { IProduct } from '../main/data-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  items: any;

  constructor(private fb: FormBuilder) { 
  }

  products = [{name:'name1', description:'asdfasdffasd'},{name:'name2', description:'asdfasdffasd'},{name:'name3', description:'asdfasdffasd'}]
  profileForm = this.fb.group({ 
    items: this.fb.group({
      item1:[''],
      item2:[''],
    }),
    personalInfo:this.fb.group({
      name:[''],
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
  getItems(){
    return this.products
  }
}
