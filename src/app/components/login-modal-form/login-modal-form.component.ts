import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styleUrls: ['./login-modal-form.component.sass']
})
export class LoginModalFormComponent {

  async signInWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(getAuth() ,email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  // Get the user's ID token.

}
