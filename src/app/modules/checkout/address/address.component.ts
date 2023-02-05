import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';
FormControl
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent {
  form: any;
  controls: any;
  constructor(private _formService: PersonalDataService){  }
  ngOnInit(){
    this.form = <FormGroup>this._formService.getForm().get('address')!
   
    this.controls =  Object.entries(this.form.controls)
    
    console.log(this.form);
    
    
  }
}
