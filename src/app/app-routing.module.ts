import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './modules/main/main-page/main-page.component';
import { ShoppingItemDetailedComponent } from './modules/main/shopping-item-detailed/shopping-item-detailed.component';
import { PreloadAllModules } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { BikeEditGuard } from './guards/bike-edit.guard';
import { CheckoutGuard } from './guards/checkout.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bikes/:id', component: ShoppingItemDetailedComponent },
  {
    path: 'bikes/:id/edit',
    loadChildren: () =>
      import('./modules/edit-add-new-item/edit-add-new-item.module').then(
        (m) => m.EditAddNewItemModule
      ),
    canActivate: [BikeEditGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule),
    canActivate: [CheckoutGuard]
  },
  {
    path: 'add-new-item',
    loadChildren: () =>
      import('./modules/edit-add-new-item/edit-add-new-item.module').then(
        (m) => m.EditAddNewItemModule
      ),
    canActivate: [AdminGuard]
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
