import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './modules/main/main-page/main-page.component';
import { ShoppingItemDetailedComponent } from './modules/main/shopping-item-detailed/shopping-item-detailed.component';
import { PreloadAllModules } from '@angular/router';
import { CheckoutComponent } from './modules/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bikes/:id', component: ShoppingItemDetailedComponent },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
