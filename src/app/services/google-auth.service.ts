import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  constructor(private authService: AuthService) {}

  signIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)!;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
