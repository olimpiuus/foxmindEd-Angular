import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DataFetchService } from './data-fetch.service';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { LimitCharactersPipe } from './limit-characters.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    MainPageComponent,
    ShoppingItemComponent,
    LimitCharactersPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [DataFetchService],
})
export class MainModule { }
