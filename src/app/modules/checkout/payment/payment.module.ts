import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule,MatSelectModule,ReactiveFormsModule,MatInputModule]
})
export class PaymentModule {
  
}
