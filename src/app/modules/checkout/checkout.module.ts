import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonsNavigationComponent } from './buttons-navigation/buttons-navigation.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CheckoutComponent, NavComponent, ButtonsNavigationComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CheckoutModule {}
