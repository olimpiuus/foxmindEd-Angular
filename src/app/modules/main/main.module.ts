import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DataFetchService } from './data-fetch.service';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ShoppingItemDetailedComponent } from './shopping-item-detailed/shopping-item-detailed.component';
import { AppRoutingModule } from '../../app-routing.module';

import { StarRatingModule } from 'angular-star-rating';

import { LimitCharactersPipe } from './limit-characters.pipe';
import { BikeDetailedComponent } from 'src/app/modules/main/bike-detailed/bike-detailed.component';
import { BtnAddNewItemComponent } from './btn-add-new-item/btn-add-new-item.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    MainPageComponent,
    ShoppingItemComponent,
    ShoppingItemDetailedComponent,
    LimitCharactersPipe,
    BikeDetailedComponent,
    BtnAddNewItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    StarRatingModule.forRoot()
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // provideFirebaseApp(() => getApp()),
    // provideFirestore(() => getFirestore())

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule
  ],
  providers: [DataFetchService],
  exports: [BikeDetailedComponent]
})
export class MainModule {}
