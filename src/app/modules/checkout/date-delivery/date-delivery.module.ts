import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDeliveryRoutingModule } from './date-delivery-routing.module';
import { DateDeliveryComponent } from './date-delivery.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DateDeliveryComponent
  ],
  imports: [
    CommonModule,
    DateDeliveryRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class DateDeliveryModule { }
