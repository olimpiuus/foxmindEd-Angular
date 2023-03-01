import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PersonalDataService } from './personal-data.service';

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
export class CheckoutComponent implements OnInit {
  form: FormGroup<any>;
  formGroups: any;
  constructor(private _form: PersonalDataService) {}

  ngOnInit() {
    this.form = this._form.getForm() as FormGroup;
    this.formGroups = Object.entries(this.form.controls);
  }
}
