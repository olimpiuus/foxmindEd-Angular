import { Component, QueryList, ViewChildren } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products: Observable<IProduct[]>;

  constructor(private requestService: DataFetchService) {}

  // @ViewChildren(ShoppingItemComponent)
  // primaryShoppingItem: QueryList<ShoppingItemComponent>;

  ngOnInit() {
    console.log(this.requestService);
    this.products = this.requestService.getProductsArray();
  }
}
