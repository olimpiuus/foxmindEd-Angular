import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateDeliceryComponent } from './date-delicery.component';

const routes: Routes = [{ path: '', component: DateDeliceryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateDeliceryRoutingModule { }
