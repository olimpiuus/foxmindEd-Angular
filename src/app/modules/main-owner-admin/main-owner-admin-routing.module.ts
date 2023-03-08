import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOwnerGuard } from 'src/app/guards/admin-owner.guard';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainOwnerAdminRoutingModule {}
