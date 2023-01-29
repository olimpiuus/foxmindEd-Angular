import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
  main:boolean;
  description: string;
  shipping:string;
  new:boolean;
  discountUntil:string;
  color:string[];
  size:string[];
  review:IReview[]
}
@Injectable({
  providedIn: 'root'
})

export class DataFetchService {

  constructor(private http: HttpClient) {}

  getProducts():Observable<IProduct[]>{ 
    return this.http.get<IProduct[]>('/assets/data/data.json')
  }
}
