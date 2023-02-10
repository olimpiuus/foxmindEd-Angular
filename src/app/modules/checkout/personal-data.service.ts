import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { CheckoutModule } from './checkout.module';


export function noCustomValue(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'custom' ? { noCustomValue: { value: control.value } } : null;
  };
}
@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  constructor(private fb: FormBuilder) {}

  cart = [
    {
      id: 1,
      name: 'Argon 18',
      description:
        'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    },
    {
      id: 1,
      name: 'Argon 18',
      description:
        'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    },
    {
      id: 1,
      name: 'Argon 18',
      description:
        'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana'
    }
  ];

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
  getCart() {
    return this.cart;
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
      ([address, name]) => address === routeForm
    );
    const formName = formNameAndRoute ? formNameAndRoute[1] : '';
    return this.profileForm.get(formName);
  }
  getNextFormRoute(routeForm: string) {
    if (routeForm === 'summarize') {
      return 'submit';
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
