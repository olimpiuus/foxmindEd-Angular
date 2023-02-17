import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonsNavigationComponent } from './buttons-navigation/buttons-navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { AddressComponent } from './address/address.component';
import { DateDeliveryComponent } from './date-delivery/date-delivery.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SummarizeComponent } from './summarize/summarize.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { MatSelectModule } from '@angular/material/select';

import { TitleFormPipe } from './pipes/title-form.pipe';
import { LimitCharactersPipe } from './pipes/limit-characters.pipe';
import { JSONStrPipe } from './pipes/JSON-str.pipe';
import { ThankYouComponent } from './thank-you/thank-you.component';
@NgModule({
  declarations: [
    CheckoutComponent,
    NavComponent,
    ButtonsNavigationComponent,
    AddressComponent,
    CheckoutComponent,
    DateDeliveryComponent,
    OrderListComponent,
    PaymentComponent,
    SummarizeComponent,
    LimitCharactersPipe,
    TitleFormPipe,
    JSONStrPipe,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class CheckoutModule {}
