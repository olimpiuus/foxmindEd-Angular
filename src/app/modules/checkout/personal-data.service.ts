import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { DataFetchService, IProduct } from 'src/app/services/data-fetch.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

export function noCustomValue(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'custom' ? { noCustomValue: { value: control.value } } : null;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  constructor(private fb: FormBuilder, private cartIdsService: ShoppingCartService, private fetchService:DataFetchService) {
    
  }
  cartIds : Number[];

  getCartItems(){
    this.cartIds = this.cartIdsService.cartList;
    this.cartIds.forEach(itemId=>{
      console.log(this.fetchService.getProductById(itemId));
      
      
    })
  }
  // cart = [
    // {
    //   id: 1,
    //   name: 'Argon 18',
    //   description:
    //     'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    // },
    // {
    //   id: 2,
    //   name: 'Bike 22',
    //   description:
    //     'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    // },
    // {
    //   id: 3,
    //   name: 'Bike 12',
    //   description:
    //     'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    // }
  // ];

  profileForm = this.fb.group({
    items: ['', [Validators.required]],
    personalInfo: this.fb.group({
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.pattern('[- +()0-9]+'), Validators.required]]
    }),
    address: this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required]
    }),
    payment: this.fb.group({
      type: ['', Validators.required],
      details: ['', Validators.required]
    }),
    dateOfDelivery: ['', [Validators.required, noCustomValue()]]
  });

  getForm() {
    return this.profileForm;
  }

  public get cart() {
    // this.cartIds = this.cartIdsService.cartList;
    this.cartIds = [2]
    const cart:IProduct[] = []
    
    this.cartIds.forEach(itemId=>{
      this.fetchService.getProductById(itemId).subscribe(responce=>{
        cart.push(responce)
      })
      
    })
    return cart;
  }

  resetForm() {
    this.profileForm.reset();
  }

  public get addressClass() {
    const address = this.profileForm.get('address')!.status;
    const info = this.profileForm.get('personalInfo')!.status;
    return address === 'INVALID' || info === 'INVALID' ? 'invalid' : 'valid';
  }
  public get paymentClass() {
    const status = this.profileForm.get('payment')!.status;
    return status === 'INVALID' ? 'invalid' : 'valid';
  }
  public get deliveryDateClass() {
    const status = this.profileForm.get('dateOfDelivery')!.status;
    return status === 'INVALID' ? 'invalid' : 'valid';
  }
  public get itemsListClass() {
    const status = this.profileForm.get('items')!.status;
    return status === 'INVALID' ? 'invalid' : 'valid';
  }

  routeAdj = {
    'order-list': 'items',
    address: 'address',
    payment: 'payment',
    'date-delivery': 'dateOfDelivery',
    summarize: 'summarize'
  };

  getFormByRoute(routeForm: string) {
    const formNameAndRoute = Object.entries(this.routeAdj).find(
      ([address]) => address === routeForm
    );
    const formName = formNameAndRoute ? formNameAndRoute[1] : '';
    return this.profileForm.get(formName);
  }

  getNextFormRoute(routeForm: string) {
    if (routeForm === 'checkout') {
      return 'address';
    }
    if (routeForm === 'summarize') {
      return 'thank-you';
    }
    const keys = Object.keys(this.routeAdj);
    const indexKey = keys.findIndex((name) => name === routeForm);
    return keys[indexKey + 1];
  }

  getPreviousFormRoute(routeForm: string) {
    if (routeForm === 'order-list') {
      return '';
    }
    const keys = Object.keys(this.routeAdj);
    const indexKey = keys.findIndex((name) => name === routeForm);
    return keys[indexKey - 1];
  }
}
