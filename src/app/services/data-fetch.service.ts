import { Injectable } from '@angular/core';
import { Observable, map, from } from 'rxjs';

import { getDatabase, ref, child, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAwdSgV9p34AkgUCHwZHKaF6Bn0_SSirVw',
  authDomain: 'foxminded-bike.firebaseapp.com',
  projectId: 'foxminded-bike',
  storageBucket: 'foxminded-bike.appspot.com',
  messagingSenderId: '113082574962',
  appId: '1:113082574962:web:b72a76111cf77559a6faeb'
};
const app = initializeApp(firebaseConfig);

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
  shipping: string | null;
  new: boolean;
  discountUntil: string;
  color: string[];
  size: string[];
  review: IReview[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  dataList: IProduct[];

  getProductsArray(): Observable<IProduct[]> {
    const dbRef = ref(getDatabase());
    return from(
      get(child(dbRef, `list`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val();
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        })
    );
  }

  getProductById(id: Number): Observable<IProduct> {
    return this.getProductsArray().pipe(
      map((products) => Object.values(products).find((r) => r.id === id)!)
    );
  }
}
