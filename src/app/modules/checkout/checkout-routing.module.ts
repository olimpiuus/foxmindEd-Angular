import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout.component';
import { DateDeliveryComponent } from './date-delivery/date-delivery.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SummarizeComponent } from './summarize/summarize.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'order-list'
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'date-delivery',
        component: DateDeliveryComponent
      },
      {
        path: 'summarize',
        component: SummarizeComponent
      }
    ]
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
