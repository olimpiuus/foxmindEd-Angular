import { Component } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent {
  list: any;
  form: any;
 
  constructor(private _form: PersonalDataService){  }
  ngOnInit(){
    this.form = this._form.getForm().get('items')!
    
    this.list = this._form.getItems()
    console.log(this.form);
  }

  //  public get value() {
  //   // console.log(this.form);
    
  //   return this.form.value.item1
  // }
}
