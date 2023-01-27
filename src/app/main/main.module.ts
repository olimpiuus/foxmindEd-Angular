import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DataFetchService } from './data-fetch.service';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { LimitCharactersPipe } from './limit-characters.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { ShoppingItemDetailedComponent } from './shopping-item-detailed/shopping-item-detailed.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    MainPageComponent,
    ShoppingItemComponent,
    LimitCharactersPipe,
    ShoppingItemDetailedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
    
  ],
  providers: [DataFetchService],
})
export class MainModule { }
