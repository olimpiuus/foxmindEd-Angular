import { Component, Input } from '@angular/core';
import { IProduct } from '../shop';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.sass']
})
export class ShoppingItemComponent {
  @Input() product!: IProduct;
  @Input() type!:'big'|'small'
}
