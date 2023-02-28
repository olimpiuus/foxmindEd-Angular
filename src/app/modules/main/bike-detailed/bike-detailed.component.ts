import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../data-fetch.service';

@Component({
  selector: 'app-bike-detailed',
  templateUrl: './bike-detailed.component.html',
  styleUrls: ['./bike-detailed.component.sass']
})
export class BikeDetailedComponent implements OnInit {
  @Input() product: IProduct;
  ngOnInit() {
    console.log(this.product);
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
}
