import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalFormComponent } from '../login-modal-form/login-modal-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(LoginModalFormComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'animated-modal'
    });
  }
}
