import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent {
  name: string;
  surname: string;
  email: string;
  description: string;
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm({
      name: '',
      surname: '',
      email: '',
      description: ''
    });
  }
}
