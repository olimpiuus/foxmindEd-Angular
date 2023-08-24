import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOpenCloseService } from './modal-open-close.service';

interface ICustomer {
  role: 'admin' | 'owner' | 'customer' | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, public modal: ModalOpenCloseService) {}

  currentCustomer: ICustomer = {
    role: null
  };
  public logInAdmin() {
    this.currentCustomer.role = 'admin';
    this.router.navigateByUrl('/extended');
  }
  public logInOwner() {
    this.currentCustomer.role = 'owner';
    this.router.navigateByUrl('/extended');
  }
  public logInCustomer() {
    this.currentCustomer.role = 'customer';
    this.router.navigateByUrl('/');
  }
  public logOut() {
    this.currentCustomer = {
      role: null
    };
    this.router.navigateByUrl('/');
    getAuth().signOut();
  }

  public get isAdmin() {
    return this.currentCustomer.role === 'admin';
  }
  public get isOwner() {
    return this.currentCustomer.role === 'owner';
  }
  public get isCustomer() {
    return this.currentCustomer.role === 'customer';
  }

  auth = onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      const uid = user.uid;

      if (uid === 'OEjrmnGYpaXYBiomkZfwQvuJjfV2') {
        this.modal.closeModal();
        return this.logInAdmin();
      }

      if (uid === 'gF6RRLzk87OYOdT1W4mCmlWGkL73') {
        this.modal.closeModal();
        return this.logInOwner();
      }
      this.modal.closeModal();
      return this.logInCustomer();
    }
  });
}
