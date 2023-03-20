import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './modules/main/main-page/main-page.component';
import { PreloadAllModules } from '@angular/router';
import { ShoppingItemDetailedComponent } from './components/shopping-item-detailed/shopping-item-detailed.component';

import { AdminOwnerGuard } from './guards/admin-owner.guard';
import { AdminGuard } from './guards/admin.guard';
import { CheckoutGuard } from './guards/checkout.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },

  {
    path: 'extended',
    loadChildren: () =>
      import('./modules/main-owner-admin/main-owner-admin.module').then(
        (m) => m.MainOwnerAdminModule
      ),
    canActivate: [AdminOwnerGuard]
  },

  { path: 'contact', component: ContactComponent },
  { path: 'bikes/:id', component: ShoppingItemDetailedComponent },
  {
    path: 'bikes/:id/edit',
    loadChildren: () =>
      import('./modules/edit-add-new-item/edit-add-new-item.module').then(
        (m) => m.EditAddNewItemModule
      ),
    canActivate: [AdminOwnerGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule),
    canActivate: [CheckoutGuard]
  },
  {
    path: 'extended/add-new-item',
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
