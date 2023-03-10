import { getAuth, onAuthStateChanged } from "firebase/auth";
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
  constructor(private router:Router,){
    // getAuth().signOut()
  }

  currentCustomer: ICustomer = {
    role: null
  };
  public logInAdmin() {
    console.log('admin');
    
    this.currentCustomer.role = 'admin';
    this.router.navigateByUrl('/extended')
  }
  public logInOwner() {
    console.log('owner');
    
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
    getAuth().signOut()
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

  

  auth = onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      if (uid==='OEjrmnGYpaXYBiomkZfwQvuJjfV2') {
        return this.logInAdmin()
      }
      if (uid==='ceoI67mrC9dsSZIlhBWxjyCB7Yv2') {
        console.log('owner');
        return this.logInOwner()
      }
      
      return this.logInCustomer()
      
      // ...
    } else {
      // User is signed out
      // ...
    }
  })

}
