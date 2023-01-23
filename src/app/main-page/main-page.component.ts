import { Input, Component } from '@angular/core';
import { IProduct, products as data } from '../shop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products: IProduct[] = data;
  firstProduct = this.products[0];
  arr = [...this.products];
  restProducts: IProduct[] | undefined;
  constructor() {
    this.restProducts = this.getRestProducts();
  }
  getRestProducts() {
    if (this.arr.length > 0) {
      this.arr.shift();
      return [...this.arr];
    }
    return undefined;
  }
}
