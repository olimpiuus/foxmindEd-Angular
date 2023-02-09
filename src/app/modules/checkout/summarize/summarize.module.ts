import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummarizeRoutingModule } from './summarize-routing.module';
import { SummarizeComponent } from './summarize.component';
import { JSONStrPipe } from './JSON-str';

@NgModule({
  declarations: [SummarizeComponent, JSONStrPipe],
  imports: [CommonModule, SummarizeRoutingModule]
})
export class SummarizeModule {}
