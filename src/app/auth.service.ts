import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  customer = {
    isAdmin: false,
    isOwner: false,
    isCustomer: false
  };
  public logInAdmin() {
    this.customer.isAdmin = true;
  }
  public logInOwner() {
    this.customer.isOwner = true;
  }
  public logInCustomer() {
    this.customer.isCustomer = true;
  }
  public logOut() {
    this.customer = {
      isAdmin: false,
      isOwner: false,
      isCustomer: false
    };
  }
}
