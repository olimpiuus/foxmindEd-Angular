import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './modules/main/main-page/main-page.component';
import { ShoppingItemDetailedComponent } from './modules/main/shopping-item-detailed/shopping-item-detailed.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bikes/:id', component: ShoppingItemDetailedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
