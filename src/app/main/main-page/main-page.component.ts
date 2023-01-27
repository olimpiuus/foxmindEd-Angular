import { Component, QueryList, ViewChildren } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  products: IProduct[]
  
  constructor(
    private requestService: DataFetchService
    ){}
    
  @ViewChildren(ShoppingItemComponent)
  primaryShoppingItem:QueryList<ShoppingItemComponent>

  ngOnInit(){
    this.requestService.getProducts().subscribe(response=>{
      this.products=response
    })
  }
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.primaryShoppingItem);
  }  
  
}
