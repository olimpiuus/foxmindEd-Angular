import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProduct } from '../main/data-fetch.service';
import { PersonalDataService } from './personal-data.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
export abstract class FormProvider {
  abstract getForm(): FormGroup;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
  host: {
    class: 'checkout'
  }
})
export class CheckoutComponent {
  form: FormGroup<any>;
  formGroups: any;
  constructor(private _form: PersonalDataService) {}

  ngOnInit() {
    this.form = this._form.getForm() as FormGroup;
    this.formGroups = Object.entries(this.form.controls);
  }
}
