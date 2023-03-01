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
import { ChangeItemBlockComponent } from './change-item-block/change-item-block.component';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ShoppingItemComponent,
    ShoppingItemDetailedComponent,
    LimitCharactersPipe,
    BikeDetailedComponent,
    BtnAddNewItemComponent,
    ChangeItemBlockComponent,
    EditItemFormComponent
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
  ],
  providers: [DataFetchService],
  exports: [BikeDetailedComponent]
})
export class MainModule {}
