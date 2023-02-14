import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

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
        loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule)
      },
      {
        path: 'order-list',
        loadChildren: () => import('./order-list/order-list.module').then((m) => m.OrderListModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then((m) => m.AddressModule)
      },
      {
        path: 'date-delivery',
        loadChildren: () =>
          import('./date-delivery/date-delivery.module').then((m) => m.DateDeliveryModule)
      },
      {
        path: 'summarize',
        loadChildren: () => import('./summarize/summarize.module').then((m) => m.SummarizeModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
