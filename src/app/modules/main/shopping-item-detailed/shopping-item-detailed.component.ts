import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-item-detailed',
  templateUrl: './shopping-item-detailed.component.html',
  styleUrls: ['./shopping-item-detailed.component.sass']
})
export class ShoppingItemDetailedComponent implements OnInit, OnDestroy {
  sub: Subscription;
  id: number;
  bike: IProduct;

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
    this.sub = this._requestService.getProductById(this.id).subscribe((x) => (this.bike = x!));
  }
  unsubscribe() {
    this.sub.unsubscribe();
  }
}
