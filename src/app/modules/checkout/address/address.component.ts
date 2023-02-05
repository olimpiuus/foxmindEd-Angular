import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormProvider } from '../checkout.component';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent {
  formAddress: FormGroup;
  controlsAddress: string[];

  formPersonal: FormGroup;
  controlsPersonal: string[];

  constructor(private _form: PersonalDataService){  }
  ngOnInit(){
    this.formAddress = this._form.getForm().get('address')! as FormGroup;
    this.controlsAddress=Object.keys(this.formAddress.controls)

    this.formPersonal = this._form.getForm().get('personalInfo')! as FormGroup;
    this.controlsPersonal=Object.keys(this.formPersonal.controls)
  }

}
