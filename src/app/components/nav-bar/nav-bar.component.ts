import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ModalOpenCloseService } from 'src/app/services/modal-open-close.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor(
    public dialog: MatDialog,
    private auth: AuthService,
    public modalService: ModalOpenCloseService
  ) {}

  openModal() {
    this.modalService.openModal();
  }

  public get customerRole() {
    return this.auth.currentCustomer.role;
  }

  logOut() {
    this.auth.logOut();
  }
}
