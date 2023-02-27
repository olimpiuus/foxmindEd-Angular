import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewItemRoutingModule } from './add-new-item-routing.module';
import { AddNewItemComponent } from './add-new-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';

import { BikeDetailedComponent } from './bike-detailed/bike-detailed.component';
@NgModule({
  declarations: [AddNewItemComponent, BikeDetailedComponent],
  imports: [
    CommonModule,
    AddNewItemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    FileUploadModule,
    HttpClientModule,
    StarRatingModule.forRoot()
  ]
})
export class AddNewItemModule {}
