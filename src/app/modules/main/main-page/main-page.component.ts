import { Component } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products: Observable<IProduct[]>;

  constructor(private requestService: DataFetchService) {}

  ngOnInit() {
    this.products = this.requestService.getProductsArray();
  }
}
