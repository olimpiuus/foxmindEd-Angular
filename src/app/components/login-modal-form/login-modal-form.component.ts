import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthService } from 'src/app/services/google-auth.service';

@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styleUrls: ['./login-modal-form.component.sass']
})
export class LoginModalFormComponent {
  constructor(public google: GoogleAuthService) {}
  async signInWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(getAuth(), email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  async signInWithGoogle() {
    this.google.signIn();
  }
}
