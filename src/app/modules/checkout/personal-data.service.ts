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
      name: ['', Validators.required],
      middleName:[''],
      lastName:['', Validators.required],
      email:['',[Validators.email, Validators.required]],
      phone:['', [Validators.pattern('[- +()0-9]+'), Validators.required]]
    }),
    address: this.fb.group({
      address1:['',Validators.required],
      address2:[''],
      city:['',Validators.required],
      country:['',Validators.required],
      postalCode:['',Validators.required]
    }),
    payment: this.fb.group({
      type:['', Validators.required],
      details:['', Validators.required]
    }),
    dateOfDelivery: [''],
    
  })

  getForm(){
    return this.profileForm
  }
  public get addressClass() {
    const address = this.profileForm.get('address')!.status
    const info = this.profileForm.get('personalInfo')!.status
    return address==='INVALID'||info==="INVALID"?'invalid':'valid'
  }
  public get paymentClass() {
    const status =  this.profileForm.get('payment')!.status
    return status==='INVALID'?'invalid':'valid'
  }
  public get deliveryDateClass() {
    const status =  this.profileForm.get('dateOfDelivery')!.status
    return status==='INVALID'?'invalid':'valid'
  }
  routeAdj = {
    'order-list': 'items',
    'address': 'address',
    'payment': 'payment',
    'date-delivery' : 'dateOfDelivery',
    'summarize': 'summarize'
  }

  getFormByRoute(routeForm:string){
    const formNameAndRoute = Object.entries(this.routeAdj).find(([address, name])=>address===routeForm)
    const formName = formNameAndRoute?formNameAndRoute[1]:''
    return this.profileForm.get(formName)
  }
  getNextFormRoute(routeForm:string){
    if (routeForm === 'summarize') { return 'submit'}
    const keys = Object.keys(this.routeAdj)
    const indexKey = keys.findIndex(name=>name===routeForm)
    return keys[indexKey+1]
  }
  getPreviousFormRoute(routeForm:string){
    if (routeForm === 'order-list') { return ''}
    const keys = Object.keys(this.routeAdj)
    const indexKey = keys.findIndex(name=>name===routeForm)
    return keys[indexKey-1]
  }
}
