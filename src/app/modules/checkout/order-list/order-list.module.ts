import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitCharactersPipe } from '../../main/limit-characters.pipe';

@NgModule({
  declarations: [OrderListComponent,LimitCharactersPipe],
  imports: [CommonModule, OrderListRoutingModule, MatListModule, ReactiveFormsModule, FormsModule]
})
export class OrderListModule {}
