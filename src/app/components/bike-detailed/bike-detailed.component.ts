import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/services/data-fetch.service';

@Component({
  selector: 'app-bike-detailed',
  templateUrl: './bike-detailed.component.html',
  styleUrls: ['./bike-detailed.component.sass']
})
export class BikeDetailedComponent {
  @Input() product: IProduct;

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
}
