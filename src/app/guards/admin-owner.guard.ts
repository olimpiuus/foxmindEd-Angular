import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOwnerGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(){
    return this.auth.isOwner || this.auth.isAdmin;
  }
  
}
