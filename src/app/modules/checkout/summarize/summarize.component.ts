import { Component } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.sass']
})
export class SummarizeComponent {
  constructor(private _form: PersonalDataService){
    console.log(this.formValues[1][1]?.toString());
  }
  formValues = Object.entries(this._form.getForm().value)
}
