import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  constructor(public form: PersonalDataService){ }
}
