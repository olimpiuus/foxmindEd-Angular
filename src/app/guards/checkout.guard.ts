import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate() {
    return (
      this.auth.customer.isOwner || this.auth.customer.isAdmin || this.auth.customer.isCustomer
    );
  }
}
