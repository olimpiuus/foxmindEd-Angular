import { Component } from '@angular/core';
import { IProduct, products} from './shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular';
  products :IProduct[] = products;
}
