import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDeliceryRoutingModule } from './date-delicery-routing.module';
import { DateDeliceryComponent } from './date-delicery.component';


@NgModule({
  declarations: [
    DateDeliceryComponent
  ],
  imports: [
    CommonModule,
    DateDeliceryRoutingModule
  ]
})
export class DateDeliceryModule { }
