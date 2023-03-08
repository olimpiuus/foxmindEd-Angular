import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styleUrls: ['./login-modal-form.component.sass']
})
export class LoginModalFormComponent {
  // constructor(public afAuth: getAuth) {}
  // signInWithEmail(...params:any[]){
  //   console.log([params]);
    
  // }
  async signInWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(getAuth() ,email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
