import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [{ path: '', component: CheckoutComponent }, { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
