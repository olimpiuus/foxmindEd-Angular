import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent {
  form: FormControl;
  items: any[];
  constructor(private _form: PersonalDataService) {
    this.form = this._form.getForm().get('items')! as FormControl;
    this.items = this._form.cart;
  }
}
