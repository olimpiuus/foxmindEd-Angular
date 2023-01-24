import { Component, HostBinding, Input } from '@angular/core';
import { IProduct } from '../shop';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.sass']
})
export class ShoppingItemComponent {
  @Input() product: IProduct;
  @Input() index: number;

  public get type(): string {
    return this.index ? 'small' : 'big';
  }

  public get class(): string {
    if (this.product.salePercent > 74) {
      return 'card_red';
    } else if (this.product.salePercent < 50) {
      return 'card_yellow';
    }
    return 'card_orange';
  }

  @HostBinding('class') get HeadingClass() {
    return this.type;
  }
}
