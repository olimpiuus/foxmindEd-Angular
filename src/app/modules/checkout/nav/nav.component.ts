import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  form: FormGroup<any>;
  formGroups: any;

  constructor(private _form: PersonalDataService){  }

  ngOnInit(){
    this.form = this._form.getForm() as FormGroup;
    this.formGroups = Object.keys( this.form.controls)
  }
}
