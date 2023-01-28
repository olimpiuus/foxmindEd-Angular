import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IProduct } from '../data-fetch.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.sass']
})
export class ShoppingItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() index: number;

  public get type(): string {
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

  public get attributes() {
    const attributes = [];
    if (this.product.new) {
      attributes.push(this.product.new);
    }
    if (this.product.shipping) {
      attributes.push(this.product.shipping);
    }
    if (this.product.discountUntil) {
      attributes.push(this.product.discountUntil);
    }
    return attributes;
  }

  @HostBinding('class') get HeadingClass() {
    return this.type;
  }
  ngOnInit() {
    if (this.product.main) {
      this.product.discount = 70;
    }
  }
}
