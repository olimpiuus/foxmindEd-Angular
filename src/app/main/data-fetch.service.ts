import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap} from 'rxjs';
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
  productsUrl = '/assets/data/data.json'
  
  getProductsArray():Observable<IProduct[]>{ 
    return this.http.get<IProduct[]>(this.productsUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<IProduct[]>('getHeroes', []))
    );
  }
  getProductById(id: number): Observable<IProduct> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<IProduct>(`getHero id=${id}`))
    );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }

}
