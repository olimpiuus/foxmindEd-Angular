import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataFetchService, IProduct } from 'src/app/services/data-fetch.service';
import { AdminGuard } from 'src/app/guards/admin.guard';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  products: IProduct[];
  productsObj: IProduct[];

  constructor(
    private requestService: DataFetchService,
    private auth: AuthService,
    private adminGuard: AdminGuard
  ) {}

  ngOnInit() {
    this.requestService
      .getProductsArray()
      .subscribe((response) => (this.products = Object.values(response)));
  }

  giveAdminRights() {
    this.auth.logInAdmin();
  }

  giveCustomerRights() {
    this.auth.logInCustomer();
  }

  giveOwnerRights() {
    this.auth.logInOwner();
  }
  logOut() {
    this.auth.logOut();
  }

  isAdmin() {
    return this.auth.isAdmin;
  }
}
