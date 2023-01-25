import { Component } from '@angular/core';
import { DataFetchService, IProduct } from '../data-fetch.service';


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

  ngOnInit(){
    this.requestService.getProducts().subscribe(response=>{
      this.products=response
    })
    console.log(this.products);
    
  }
  
}
