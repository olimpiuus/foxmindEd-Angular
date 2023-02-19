import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface IReview {
  author: string;
  text: string;
  rating: number;
}

export interface IProduct {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  shop: string;
  discount: number;
  main: boolean;
  description: string;
  shipping: string;
  new: boolean;
  discountUntil: string;
  color: string[];
  size: string[];
  review: IReview[];
}
@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  constructor(private http: HttpClient) {}
  productsUrl = 'https://bike-shop-336d1-default-rtdb.firebaseio.com/data.json'

  getProductsArray(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    const url = `${this.productsUrl}`;
    return this.http
      .get<IProduct[]>(url)
      .pipe(map((products) => products.find((r) => r.id === id)!));
  }
}
