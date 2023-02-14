import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummarizeRoutingModule } from './summarize-routing.module';
import { SummarizeComponent } from './summarize.component';
import { JSONStrPipe } from './JSON-str.pipe';
import { MatListModule } from '@angular/material/list';
import { TitleFormPipe } from './title-form.pipe';

@NgModule({
  declarations: [SummarizeComponent, JSONStrPipe, TitleFormPipe],
  imports: [CommonModule, SummarizeRoutingModule, MatListModule]
})
export class SummarizeModule {}
