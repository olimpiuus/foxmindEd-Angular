
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

interface ICustomer {
  role:'admin'|'owner'|'customer'|null
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router:Router,){}
  currentCustomer: ICustomer = {
    role: null
  };
  public logInAdmin() {
    this.currentCustomer.role = 'admin';
    this.router.navigateByUrl('/extended')
  }
  public logInOwner() {
    this.currentCustomer.role = 'owner';
    this.router.navigateByUrl('/extended')
  }
  public logInCustomer() {
    this.currentCustomer.role = 'customer';
    this.router.navigateByUrl('/')
  }
  public logOut() {
    this.currentCustomer = {
      role: null
    };
    this.router.navigateByUrl('/')
  }
  public get isAdmin(){
    return this.currentCustomer.role==='admin'
  }
  public get isOwner(){
    return this.currentCustomer.role==='owner'
  }
  public get isCustomer(){
    return this.currentCustomer.role==='customer'
  }
}
