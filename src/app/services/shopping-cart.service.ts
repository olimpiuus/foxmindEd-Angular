import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartListById: Number[] = []

  public addToCart(id:Number){
    this.cartListById.push(id)
  }

  public get cartList() {
    return this.cartListById
  }
  
}
