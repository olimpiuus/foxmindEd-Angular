import { Component, QueryList, ViewChildren } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products: Observable<IProduct[]>;

  // constructor(private requestService: DataFetchService) {}

  constructor(private fireStore: AngularFirestore) {
    this.products=fireStore.collection('data').valueChanges() as Observable<IProduct[]>
  }

  @ViewChildren(ShoppingItemComponent)
  primaryShoppingItem: QueryList<ShoppingItemComponent>;

  ngOnInit() {
    // this.requestService.getProductsArray().subscribe((response) => (this.products = response));
    console.log(this.fireStore);
    
  }



}
