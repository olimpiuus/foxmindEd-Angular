import { Component, HostBinding, Input } from '@angular/core';
import { IProduct } from '../data-fetch.service';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.sass']
})
export class ShoppingItemComponent {
  @Input() product: IProduct;
  @Input() index: number;

  public get type(): string {
    console.log(this);
    
    return this.index ? 'small' : 'big';
  }

  public get class(): string {
    if (this.product.discount > 74) {
      return 'card_red';
    } else if (this.product.discount < 50) {
      return 'card_yellow';
    }
    return 'card_orange';
  }

  @HostBinding('class') get HeadingClass() {
    return this.type;
  }
}
