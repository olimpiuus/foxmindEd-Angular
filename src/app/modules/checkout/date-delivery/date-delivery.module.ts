import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDeliveryRoutingModule } from './date-delivery-routing.module';
import { DateDeliveryComponent } from './date-delivery.component';


@NgModule({
  declarations: [
    DateDeliveryComponent
  ],
  imports: [
    CommonModule,
    DateDeliveryRoutingModule
  ]
})
export class DateDeliveryModule { }
