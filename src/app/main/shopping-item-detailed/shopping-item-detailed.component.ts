import { Component } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-shopping-item-detailed',
  templateUrl: './shopping-item-detailed.component.html',
  styleUrls: ['./shopping-item-detailed.component.sass']
})

export class ShoppingItemDetailedComponent {
  sub: Observable<IProduct>;
  id: number;
  product: IProduct;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _requestService: DataFetchService,
    ){
      this.id =  parseInt(this._Activatedroute.snapshot.paramMap.get('id')!);
    }

  ngOnInit() {
    this.getProduct()
  }
  getProduct(){
    this._requestService.getProductById(this.id).subscribe(x=>this.product=x!)
  }

  onBack(): void {
    this._router.navigate(['']);
  }
}
