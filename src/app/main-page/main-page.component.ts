import { Input, Component } from '@angular/core';
import { IProduct } from '../shop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  @Input() products!: IProduct[];
}
