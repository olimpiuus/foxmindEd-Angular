import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';


@Component({
  selector: 'app-date-delivery',
  templateUrl: './date-delivery.component.html',
  styleUrls: ['./date-delivery.component.sass']
})
export class DateDeliveryComponent {
  constructor(private _form: PersonalDataService){  }
  dateDelivery = this._form.getForm().get('dateOfDelivery') as FormControl
  log(){
    console.log(this.dateDelivery);
    
  }
}
