import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase, set } from 'firebase/database';
import { from } from 'rxjs';

import { getStorage } from 'firebase/storage';

// 1123123123123
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwdSgV9p34AkgUCHwZHKaF6Bn0_SSirVw',
  authDomain: 'foxminded-bike.firebaseapp.com',
  projectId: 'foxminded-bike',
  storageBucket: 'foxminded-bike.appspot.com',
  messagingSenderId: '113082574962',
  appId: '1:113082574962:web:b72a76111cf77559a6faeb'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { ref, child, get } from 'firebase/database';

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
  review: IReview[];
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

  getProductById(id: number): Observable<IProduct> {
    return this.getProductsArray().pipe(map((products) => products.find((r) => r.id === id)!));
  }

  getNextId(): Observable<number> {
    return this.getProductsArray().pipe(map((products) => products.length));
  }

  addElementToList(obj: IProduct): void {
    this.getNextId().subscribe((id) => {
      const db = getDatabase();
      set(ref(db, `list/${id}`), obj);
    });
  }
}
