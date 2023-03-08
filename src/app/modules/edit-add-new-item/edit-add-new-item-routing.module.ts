import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAddNewItemComponent } from './edit-add-new-item.component';

const routes: Routes = [{ path: '', component: EditAddNewItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewItemRoutingModule {}
