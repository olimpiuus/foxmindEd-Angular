import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ChangeItemBlockComponent } from './change-item-block/change-item-block.component';

import { BtnAddNewItemComponent } from './btn-add-new-item/btn-add-new-item.component';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

// import { AppRoutingModule } from '../../app-routing.module';

import { StarRatingModule } from 'angular-star-rating';

import { LimitCharactersPipe } from './limit-characters.pipe';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { MainOwnerAdminRoutingModule } from './main-owner-admin-routing.module';




@NgModule({
  declarations: [
    MainPageComponent,
    ShoppingItemComponent,
    LimitCharactersPipe,
    BtnAddNewItemComponent,
    ChangeItemBlockComponent
  ],
  imports: [
    CommonModule,
    MainOwnerAdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    StarRatingModule.forRoot(),
    MatIconModule

  ],
  providers: [DataFetchService]
})
export class MainOwnerAdminModule {}
