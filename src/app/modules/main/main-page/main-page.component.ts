import { Component, OnInit } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  products: IProduct[];
  productsObj: IProduct[];

  constructor(private requestService: DataFetchService) {}

  ngOnInit() {
    this.requestService
      .getProductsArray()
      .subscribe((response) => (this.products = Object.values(response)));
  }
}
