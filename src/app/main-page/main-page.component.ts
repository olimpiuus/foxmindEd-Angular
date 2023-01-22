import { Input, Component } from '@angular/core';
import { IProduct, products as data } from '../shop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products = data;
  // @Input() products!: IProduct[];
}
