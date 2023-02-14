import { Component } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-item-detailed',
  templateUrl: './shopping-item-detailed.component.html',
  styleUrls: ['./shopping-item-detailed.component.sass']
})
export class ShoppingItemDetailedComponent {
  sub: Subscription;
  id: number;
  product: IProduct;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _requestService: DataFetchService
  ) {
    this.id = parseInt(this._Activatedroute.snapshot.paramMap.get('id')!);
  }

  ngOnInit() {
    this.getProduct();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onBack(): void {
    this.unsubscribe();
    this._router.navigate(['']);
  }

  getProduct() {
    this.sub = this._requestService.getProductById(this.id).subscribe((x) => (this.product = x!));
  }
  unsubscribe() {
    this.sub.unsubscribe();
  }

  public get rating() {
    const arr = this.product.review.map((review) => {
      return review.rating;
    });
    const sum = arr.reduce((acc, el) => (acc += el), 0);
    return sum / arr.length;
  }
  public get ratingQuantity() {
    return this.product.review.length;
  }

  public get checked() {
    return true;
  }
}
