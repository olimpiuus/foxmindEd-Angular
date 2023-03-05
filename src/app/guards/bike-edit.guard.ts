import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BikeEditGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(){
    return this.auth.customer.isOwner || this.auth.customer.isAdmin;
  }
}
