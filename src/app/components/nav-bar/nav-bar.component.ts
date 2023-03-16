import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModalFormComponent } from '../login-modal-form/login-modal-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor(public dialog: MatDialog, private auth: AuthService) {}

  openModal() {
    const dialogRef = this.dialog.open(LoginModalFormComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'animated-modal'
    });
  }

  public get customerRole() {
    return this.auth.currentCustomer.role;
  }

  logOut() {
    this.auth.logOut();
  }
}
