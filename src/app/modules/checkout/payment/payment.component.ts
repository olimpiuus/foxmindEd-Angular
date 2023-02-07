import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent {
  constructor(private _form: PersonalDataService){  }
  form = this._form.getForm().get('payment') as FormGroup
  typePayment = this.form.get('type')

  public get check(){
    const value = this.typePayment!.value
    if(!value) {return false}
    if (value === 'cash') {
      this.form.patchValue({details:'cash'})
      return false
    } else {
      if (this.form.get('details')?.value==='cash') {this.form.patchValue({details:''})}
      
    }
    return true

  }
}
