import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  template: `
    <form [formGroup]="form">
      <input formControlName="name">
      <input formControlName="email">
      
      <button [disabled]="form.invalid">Next</button>
    </form>
  `,

  styleUrls: ['./account.component.sass']
})
export class AccountComponent {
  @Input() form:FormGroup
}
