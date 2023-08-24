import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/services/data-fetch.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-bike-detailed',
  templateUrl: './bike-detailed.component.html',
  styleUrls: ['./bike-detailed.component.sass']
})
export class BikeDetailedComponent {
  @Input() product: IProduct;
  constructor(private cartService: ShoppingCartService){
  }

  public get rating() {
    if (!this.product.review) {
      return 0;
    }
    const arr = this.product.review.map((review) => {
      return review.rating;
    });
    const sum = arr.reduce((acc, el) => (acc += el), 0);
    return sum / arr.length;
  }
  public get ratingQuantity() {
    if (!this.product.review) {
      return 0;
    }
    return this.product.review.length;
  }

  public get checked() {
    return true;
  }

  public addToCart(id:Number){
    console.log('add');
    
    this.cartService.addToCart(id)
  }
}
