import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {
  formAddress: FormGroup;
  controlsAddress: string[];

  formPersonal: FormGroup;
  controlsPersonal: string[];

  constructor(private _form: PersonalDataService) {}
  ngOnInit() {
    this.formAddress = this._form.getForm().get('address')! as FormGroup;
    this.controlsAddress = Object.keys(this.formAddress.controls);

    this.formPersonal = this._form.getForm().get('personalInfo')! as FormGroup;
    this.controlsPersonal = Object.keys(this.formPersonal.controls);
  }
  typeInputCorrection(name: string) {
    if (name === 'email') {
      return 'email';
    }
    if (name === 'phone') {
      return 'tel';
    }
    return 'text';
  }
}
