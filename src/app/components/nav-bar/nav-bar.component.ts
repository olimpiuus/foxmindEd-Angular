import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '500px',
      height: '500px',
      panelClass: 'animated-modal'
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  template: '<a></a>',
})
export class DialogContentExampleDialog {}