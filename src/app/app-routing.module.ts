import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

const routes: Routes = [
  // { path: '', component: ShoppingItemComponent },
  // {path:'', component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
