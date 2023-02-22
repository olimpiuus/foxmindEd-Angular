import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import {data} from 'src/assets/data/data'

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
  shipping: string|null;
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
  dataList: IProduct[];

  constructor(private http: HttpClient) {
    
    // this.getProductsArray().subscribe(response=>this.list=response)
    this.dataList=data
  }
  productsUrl = '../../../assets/data/data.ts'

  getProductsArray(): Observable<IProduct[]> {
    return of(this.dataList)
    // return this.http.get<IProduct[]>(this.productsUrl);
  }

  ngOnInit(){
   
  }


  getProductById(id: number): Observable<IProduct> {
    return this.http
      .get<IProduct[]>(this.productsUrl)
      .pipe(map((products) => products.find((r) => r.id === id)!));
  }

  getUniqId(): Observable<number>{

    const uniqId = (arr:any[]):any=> {
      const random0to10000 = ()=>Math.floor(Math.random()*10000+1)
      const id = random0to10000()
      return !arr.includes(id)?id:uniqId(arr)
    }

    return this.getProductsArray().pipe(
      map((products)=>uniqId(products.map(product=>product.id)))
    )
  }
}
