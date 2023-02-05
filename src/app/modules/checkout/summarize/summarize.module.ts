import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummarizeRoutingModule } from './summarize-routing.module';
import { SummarizeComponent } from './summarize.component';


@NgModule({
  declarations: [
    SummarizeComponent
  ],
  imports: [
    CommonModule,
    SummarizeRoutingModule
  ]
})
export class SummarizeModule { }
